import InputView from "../../src/view/InputView.js";
import OutputStatusView from "../../src/view/OutputStatusView.js";
import OutputWinnerView from "../../src/view/OutputWinnerView.js";

import { ERROR_MESSAGE, MESSAGE } from "../../src/utils/constants.js";
import { getLogSpy, mockQuestions } from "./index.js";

const { DUPLICATED_CAR_NAME, INVALID_CAR_NAME, INVALID_TRY_COUNT } = ERROR_MESSAGE;
const { OUTPUT_RESULT, OUTPUT_WINNER } = MESSAGE;

describe("Input", () => {
  test("inputCarNames - 성공", async () => {
    // given
    const inputs = ["pobi,woni"];

    mockQuestions(inputs);

    // when
    const inputView = new InputView();
    const carNames = await inputView.inputCarNames();

    // then
    expect(carNames).toEqual(["pobi", "woni"]);
  });

  test("inputCarNames - 실패", async () => {
    // given
    const inputs = ["pobi,woniasd", "pobi,", "dupli,dupli"];

    const ERROR = [INVALID_CAR_NAME, INVALID_CAR_NAME, DUPLICATED_CAR_NAME];

    mockQuestions(inputs);

    // when
    const inputView = new InputView();

    // then
    inputs.forEach(async (_, i) => {
      const error = ERROR[i];

      await expect(inputView.inputCarNames()).rejects.toThrow(error);
    });
  });

  test("inputTryCount - 성공", async () => {
    // given
    const inputs = ["5"];

    mockQuestions(inputs);

    // when
    const inputView = new InputView();
    const tryCount = await inputView.inputTryCount();

    // then
    expect(tryCount).toEqual(5);
  });

  test("inputTryCount - 실패", async () => {
    // given
    const inputs = ["test", "0"];

    const ERROR = [INVALID_TRY_COUNT, INVALID_TRY_COUNT];

    mockQuestions(inputs);

    // when
    const inputView = new InputView();

    // then
    inputs.forEach(async (_, i) => {
      const error = ERROR[i];

      await expect(inputView.inputTryCount()).rejects.toThrow(error);
    });
  });
});

describe("Output", () => {
  const cars = [
    { name: "pobi", distance: 1 },
    { name: "woni", distance: 0 },
  ];
  const tryCount = 5;

  test("print - 상태 출력", () => {
    // given
    const mockGet = jest.fn().mockImplementation(() => {
      return { cars, tryCount, winners: [], currentTryCount: 1 };
    });
    const MockModel = jest.fn().mockImplementation(() => {
      return { get: mockGet, subscribe: jest.fn() };
    });

    const statusMessage = cars.map((car) => `${car.name} : ${"-".repeat(car.distance)}`).join("\n");

    const model = new MockModel();
    const view = new OutputStatusView({ model });
    const logSpy = getLogSpy();

    // when
    view.print();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(OUTPUT_RESULT));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(statusMessage));
  });

  test("print - 우승자 출력", () => {
    // given
    const mockGet = jest.fn().mockImplementation(() => {
      return { cars, tryCount, winners: ["pobi"], currentTryCount: 1 };
    });
    const MockModel = jest.fn().mockImplementation(() => {
      return { get: mockGet, subscribe: jest.fn() };
    });

    const winnerMessage = "pobi";

    const model = new MockModel();
    const view = new OutputWinnerView({ model });
    const logSpy = getLogSpy();

    // when
    view.print();

    // then
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(OUTPUT_WINNER));
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(winnerMessage));
  });
});