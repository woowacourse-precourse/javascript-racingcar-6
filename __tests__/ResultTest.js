import App from "../src/App.js";
import { resultMessage } from "../src/Messages.js";
import { MissionUtils } from "@woowacourse/mission-utils";

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

describe("각 시도별 결과 출력", () => {
  test("예제 입력 테스트", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "4"];
    const outputs = [
      "pobi : -",
      "woni : ",
      "pobi : --",
      "woni : -",
      "pobi : ---",
      "woni : --",
      "pobi : ----",
      "woni : ---",
    ];

    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD,
      MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD];

    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
