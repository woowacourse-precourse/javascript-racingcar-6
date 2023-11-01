import App from "../src/App.js";
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

describe("자동차 경주 게임", () => {
  test("한 번 더 전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "2"];
    const outputs = ["pobi : --", "woni :"];
    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD, STOP];
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

  test("초박빙", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const trial = 5;
    const inputs = ["pobi,woni,leo", `${trial}`];
    const outputs = ["pobi : ---", "woni : ---", "leo : ---"];
    const randomOfPobi = [MOVING_FORWARD, STOP, MOVING_FORWARD, STOP, MOVING_FORWARD];
    const randomOfWoni = [STOP, STOP, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD];
    const randomOfLeo = [STOP, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, STOP];
    const randoms = [];

    for (let idx = 0; idx < trial; idx++) {
      randoms.push(randomOfPobi[idx]);
      randoms.push(randomOfWoni[idx]);
      randoms.push(randomOfLeo[idx]);
    }
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
