import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGES } from "../src/module/message.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const testCases = [
  {
    description: "5자 이상 이름 입력 테스트",
    inputs: ["hi, alexgoni"],
    expectedErrorMessage: MESSAGES.MAX_NAME_LENGTH_ERROR,
  },
  {
    description: "횟수 시도 문자열 입력 테스트",
    inputs: ["hi, alex", "NaN"],
    expectedErrorMessage: MESSAGES.NOT_NUMBER_ERROR,
  },
  {
    description: "횟수 시도 공백 입력 테스트",
    inputs: ["hi, alex"],
    expectedErrorMessage: MESSAGES.EMPTY_ERROR,
  },
];

test.each(testCases)(
  "$description",
  async ({ inputs, expectedErrorMessage }) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow(expectedErrorMessage);
  }
);
