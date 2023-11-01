import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("시도할 횟수 입력 테스트", () => {
  test("시도할 횟수 정상 입력 테스트", async () => {
    const inputs = ["3"];

    mockQuestions(inputs);

    const result = await App.inputRoundNumber();

    expect(result).toEqual(3);
  });

  test.each([[["-1"]], [["longname"]]])(
    "자동차 이름 예외 처리 테스트",
    async (inputs) => {
      mockQuestions(inputs);

      await expect(App.inputRoundNumber()).rejects.toThrow("[ERROR]");
    }
  );
});
