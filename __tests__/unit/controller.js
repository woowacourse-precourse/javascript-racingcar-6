import OutputStatusView from "../../src/view/OutputStatusView.js";
import OutputWinnerView from "../../src/view/OutputWinnerView.js";

import GameController from "../../src/controller/GameController.js";

import { MESSAGE } from "../../src/utils/constants.js";

import { getLogSpy, mockQuestions, mockRandoms } from "./index.js";

const { OUTPUT_RESULT, OUTPUT_WINNER } = MESSAGE;

describe("class GameController", () => {
  const MOVING_FORWARD = 4;
  const STOP = 3;

  test("init - 데이터 초기화", async () => {
    // given
    const inputs = ["pobi,woni", "5"];

    mockQuestions(inputs);

    const controller = new GameController();

    // when
    await controller.init();

    // then
    expect(controller.model.getData()).toEqual({
      cars: [
        { name: "pobi", distance: 0 },
        { name: "woni", distance: 0 },
      ],
      tryCount: 5,
      winners: [],
      currentTryCount: 0,
    });

    expect(controller.outputStatusView).toBeInstanceOf(OutputStatusView);
    expect(controller.outputWinnerView).toBeInstanceOf(OutputWinnerView);
  });

  test("racing", async () => {
    // given
    const randoms = [MOVING_FORWARD, STOP];
    const inputs = ["pobi,woni", "1"];

    const controller = new GameController();
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    await controller.init();
    controller.racing();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(OUTPUT_RESULT));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi : -"));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("woni : "));
  });

  test("setWinners", async () => {
    // given
    const randoms = [MOVING_FORWARD, STOP];
    const inputs = ["pobi,woni", "1"];

    const controller = new GameController();
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    await controller.init();
    controller.model.setData({
      cars: [
        { name: "pobi", distance: 1 },
        { name: "woni", distance: 0 },
      ],
      tryCount: 1,
      winners: [],
      currentTryCount: 1,
    });
    controller.setWinners();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(OUTPUT_WINNER));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("pobi"));
  });
});