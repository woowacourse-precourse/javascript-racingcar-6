import { mockRandoms, getLogSpy } from "../../src/utils/testUtils";
import resultHandler from "../../src/handler/resultHandler";
import Car from "../../src/Car";

describe("ResultHandler 테스트", () => {
  test("getResultString 출력 테스트", () => {
    const CAR_NAMES = ["lurgi", "car1", "car2"];
    const CARS = CAR_NAMES.map((carName) => new Car(carName));
    const TRY_NUMBER = 3;

    const MOVING_FORWARD = 4;
    const STOP = 3;
    const RANDOMS = [
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ];
    mockRandoms(RANDOMS);

    const EXPECT = [
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
      "",
    ];

    const OUTPUT = resultHandler.getResultString({
      tryNumber: TRY_NUMBER,
      cars: CARS,
    })[0];
    expect(OUTPUT.split("\n")).toStrictEqual(EXPECT);
  });

  test("우승자 출력 테스트", () => {
    const CAR_NAMES = ["lurgi", "car1", "car2"];
    const MOVE_FORWARD = [3, 1, 3];
    const CARS = CAR_NAMES.map((carName) => new Car(carName));
    MOVE_FORWARD.forEach((number, index) => {
      for (let i = 0; i < number; i += 1) {
        CARS[index].setDistancePlusOne();
      }
    });

    const logSpy = getLogSpy();
    const OUTPUT = "최종 우승자 : lurgi, car2";

    const WINNER = resultHandler.getWinner(CARS);
    resultHandler.printWinner(WINNER);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(OUTPUT));
  });
});
