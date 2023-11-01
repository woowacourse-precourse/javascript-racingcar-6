import CarRacingGamesControllers from "../../src/controllers/CarRacingGameController.js";
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
  test("경주 준비", async () => {
    // given
    const inputs = ["pobi,jiwoo", "2"];

    mockQuestions(inputs);

    // when
    const controller = new CarRacingGamesControllers();
    await controller.prepareSettings();

    // then
    expect(controller.numberOfMoves).toBe(2);
    expect(controller.carListArr[0].name).toBe("pobi");
  });

  test("전진 및 차수별 결과 출력", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 0;
    const inputs = ["pobi,jiwoo", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const controller = new CarRacingGamesControllers();
    await controller.prepareSettings();
    controller.executeForward();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("최종 우승자 결과 출력", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 0;
    const inputs = ["pobi,jiwoo", "1"];
    const outputs = ["최종 우승자 : pobi"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const controller = new CarRacingGamesControllers();
    await controller.prepareSettings();
    controller.executeForward();
    controller.outputFinalResult();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
