import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("getNumAttempts 메서드 테스트", () => {
  beforeAll(() => {
    MissionUtils.Console.readLineAsync = jest.fn();
  });

  test("올바르게 입력한 경우", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("1");
    const app = new App();
    const result = await app.getNumAttempts();
    expect(result).toBe(1);
  });

  test("시도 횟수를 입력하지 않은 경우(예외)", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("");
    const app = new App();
    await expect(app.getNumAttempts()).rejects.toThrow("시도할 횟수를 입력하지 않았습니다.");
  });

  test("0 이하의 수를 입력한 경우(예외)", async () => {
    MissionUtils.Console.readLineAsync.mockResolvedValue("-1");
    const app = new App();
    await expect(app.getNumAttempts()).rejects.toThrow("시도할 횟수는 1 이상이어야 합니다.");
  });
})