import { MissionUtils } from "@woowacourse/mission-utils";

import App from "../src/App";
import { getUserInput } from "../src/components/getUserInput";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("기능 테스트 - 사용자 입력 예외처리", () => {
  test("자동차 이름 중복 예외처리", async () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "readLineAsync");
    const input = "ha,ha";

    logSpy.mockResolvedValue(input);
    await expect(getUserInput()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이동 횟수 예외처리", async () => {
    const inputs = ["ha,ga", "n"]; //이동횟수에 숫자로 이루어지지 않은 문자를 전달

    mockQuestions(inputs);

    const app = new App();
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
