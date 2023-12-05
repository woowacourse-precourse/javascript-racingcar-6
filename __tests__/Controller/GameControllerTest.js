import GameController from "../../src/Controller/GameController";
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

describe("GameController 테스트", () => {
  const MOVING_FORWARD = 4;
  const STOP = 3;

  test("게임 진행 테스트 1 - pobi가 우승", async () => {
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const gameController = new GameController();
    await gameController.init();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : pobi"),
    );
  });

  test("게임 진행 테스트 2 - kim이 우승", async () => {
    const inputs = ["pobi,woni,kim", "3"];
    const outputs = ["pobi : -", "woni : -", "kim : --"];
    const randoms = [
      STOP,
      STOP,
      STOP,
      STOP,
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
    const gameController = new GameController();
    await gameController.init();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : kim"),
    );
  });

  test("게임 진행 테스트 3 - pobi, kim 공동 우승", async () => {
    const inputs = ["pobi,woni,kim", "3"];
    const outputs = ["pobi : ---", "woni : ", "kim : ---"];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const gameController = new GameController();
    await gameController.init();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : pobi, kim"),
    );
  });
});
