import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("자동차 경주 게임", () => {
  test("올바르지 않은 시도할 횟수에 대한 예외 처리", async () => {
    // given
    const inputs = ["pobi,crong,honux", 0];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
