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

describe("자동차 게임 진행상태 출력", () => {
  test("진행상태 출력", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "3"];
    const outputs = [
      "pobi : -",
      "woni : ",
      "pobi : --",
      "woni : -",
      "pobi : ---",
      "woni : --",
    ];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // 각 출력상황을 정확히 비교
    expect(logSpy).toHaveBeenNthCalledWith(
      2,
      expect.stringContaining(outputs[0])
    );
    expect(logSpy).toHaveBeenNthCalledWith(
      3,
      expect.stringContaining(outputs[1])
    );
    expect(logSpy).toHaveBeenNthCalledWith(
      5,
      expect.stringContaining(outputs[2])
    );
    expect(logSpy).toHaveBeenNthCalledWith(
      6,
      expect.stringContaining(outputs[3])
    );
    expect(logSpy).toHaveBeenNthCalledWith(
      8,
      expect.stringContaining(outputs[4])
    );
    expect(logSpy).toHaveBeenNthCalledWith(
      9,
      expect.stringContaining(outputs[5])
    );
  });
});
