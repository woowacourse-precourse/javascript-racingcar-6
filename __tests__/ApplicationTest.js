import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Validation from "../src/Validation/Validation.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임", () => {
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]], [["pobi,pobi"]]])(
    "이름에 대한 예외 처리",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
});
describe("isValidTrialNumber 함수", () => {
  test("유효한 숫자인 경우", () => {
    const validTrialNumber = 5;
    const validation = new Validation();
    const testFunction = () => validation.isValidTrialNumber(validTrialNumber);
    expect(testFunction).not.toThrow();
  });

  test("유효하지 않은 숫자일 경우", () => {
    const invalidTrialNumber = "invalid";
    const validation = new Validation();
    const testFunction = () =>
      validation.isValidTrialNumber(invalidTrialNumber);
    expect(testFunction).toThrowError("[ERROR]");
  });
});
