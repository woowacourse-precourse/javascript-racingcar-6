import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const MOVING_FORWARD = 4;
const STOP = 3;

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
  test("3인 경주 - a 승리", async () => {
    // given
    const inputs = ["a,b,c", "1"];
    const outputs = ["a : -", "b : ", "c : ", "최종 우승자 : a"];
    const randoms = [MOVING_FORWARD, STOP, STOP];
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
  test("3인 경주 - a, b 공동 승리", async () => {
    // given
    const inputs = ["a,b,c", "1"];
    const outputs = ["a : -", "b : -", "c : ", "최종 우승자 : a, b"];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD, STOP];
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
  test("3인 경주 - a, b, c 공동 승리", async () => {
    // given
    const inputs = ["a,b,c", "1"];
    const outputs = ["a : -", "b : -", "c : ", "최종 우승자 : a, b, c"];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD];
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
