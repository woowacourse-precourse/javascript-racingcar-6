import { mockRandoms, getLogSpy } from "../../src/utils/testUtils";
import resultHandler from "../../src/handler/resultHandler";
import Car from "../../src/Car";

function printResultStringTest({ randoms, carNames, tryNumber, results }) {
  mockRandoms(randoms);
  const CARS = carNames.map((carName) => new Car(carName));
  const logSpy = getLogSpy();
  resultHandler.printResultString({
    tryNumber,
    cars: CARS,
  });
  results.forEach((result) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
  });
}

function winnerResultTest(carNames, moveForwards, output) {
  const CARS = carNames.map((carName) => new Car(carName));
  moveForwards.forEach((number, index) => {
    for (let i = 0; i < number; i += 1) {
      CARS[index].setDistancePlusOne();
    }
  });

  const logSpy = getLogSpy();
  const WINNER = resultHandler.getWinner(CARS);
  resultHandler.printWinner(WINNER);
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
}

describe("ResultHandler 테스트", () => {
  const MOVING_FORWARD = 4;
  const STOP = 3;
  const STRING_TEST_CASES = [
    [
      ["lurgi", "car1", "car2"],
      3,
      [
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
        STOP,
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
        MOVING_FORWARD,
      ],
      [
        "실행 결과",
        "lurgi : -",
        "car1 : -",
        "car2 : -",
        "",
        "lurgi : --",
        "car1 : -",
        "car2 : --",
        "",
        "lurgi : ---",
        "car1 : --",
        "car2 : ---",
        "",
      ],
    ],
    [
      ["lurgi", "jeong"],
      2,
      [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD],
      [
        "실행 결과",
        "lurgi : -",
        "jeong : -",
        "",
        "lurgi : --",
        "jeong : --",
        "",
      ],
    ],
  ];
  test.each(STRING_TEST_CASES)(
    "getResultString 출력 테스트",
    (carNames, tryNumber, randoms, results) => {
      printResultStringTest({
        randoms,
        carNames,
        tryNumber,
        results,
      });
    }
  );

  const WINNER_TEST_CASES = [
    [["lurgi", "car1", "car2"], [3, 1, 3], "최종 우승자 : lurgi, car2"],
    [["lurgi", "j eon", "woo"], [0, 1, 0], "최종 우승자 : j eon"],
    [["lurgi", "hi", "hi1"], [2, 2, 2], "최종 우승자 : lurgi, hi, hi1"],
  ];
  test.each(WINNER_TEST_CASES)(
    "우승자 출력 테스트",
    (carNames, moveForwards, output) => {
      winnerResultTest(carNames, moveForwards, output);
    }
  );
});
