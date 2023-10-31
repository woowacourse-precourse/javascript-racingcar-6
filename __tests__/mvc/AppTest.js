import App from "../../src/App";
import { Console, Random } from "@woowacourse/mission-utils";
import NUMBERS from "../../src/constants/numbers";

const mockQuestions = (inputs) => {
  Console.readLineAsync = jest.fn();

  Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임", () => {
  test("정상적으로 진행되는 게임", async () => {
    // given
    const MOVING_NUMBER = NUMBERS.four;
    const STOP_NUMBER = NUMBERS.three;
    const inputs = ["hyuri,hyu,rim", `${NUMBERS.three}`];
    const outputs = ["hyuri : ---", "hyu : -", "rim : --"];
    const randoms = [
      MOVING_NUMBER, STOP_NUMBER, STOP_NUMBER,
      MOVING_NUMBER, MOVING_NUMBER, MOVING_NUMBER,
      MOVING_NUMBER, STOP_NUMBER, MOVING_NUMBER
    ];
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
});
