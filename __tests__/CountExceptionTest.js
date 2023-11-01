import App from "../src/App.js";
import * as MissionUtils from "@woowacourse/mission-utils";

describe("실행 횟수 입력 예외 테스트", () => {
  test("0을 입력한 경우 에러 메시지 반환", async () => {
    const app = new App();

    jest.spyOn(MissionUtils.Console, "readLineAsync").mockResolvedValue("0");

    try {
      await app.inputCountNumber();
    } catch (error) {
      expect(error.message).toBe("[ERROR] 1 이상의 정수를 입력해주세요.");
    }
  });

  test("음수를 입력한 경우 에러 메시지 반환", async () => {
    const app = new App();

    jest.spyOn(MissionUtils.Console, "readLineAsync").mockResolvedValue("-1");

    try {
      await app.inputCountNumber();
    } catch (error) {
      expect(error.message).toBe("[ERROR] 1 이상의 정수를 입력해주세요.");
    }
  });

  test("정수가 아닌 수를 입력한 경우 에러 메시지 반환", async () => {
    const app = new App();

    jest.spyOn(MissionUtils.Console, "readLineAsync").mockResolvedValue("1.5");

    try {
      await app.inputCountNumber();
    } catch (error) {
      expect(error.message).toBe("[ERROR] 1 이상의 정수를 입력해주세요.");
    }
  });
});
