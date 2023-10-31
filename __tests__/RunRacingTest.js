import { Console } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import { mockRandoms } from "../src/utils/testUtils.js";

describe("runRacing", () => {
  let app;

  beforeEach(() => {
    app = new App();
    jest.restoreAllMocks();
    Console.print = jest.fn();
  });

  const GO = 4;
  const STOP = 3;

  const carsStatus = { Car1: 0, Car2: 0 };
  const racingCount = 3;
  const numberOfCars = Object.keys(carsStatus).length;
  const advanceRandomNumbers = Array(racingCount * numberOfCars).fill(GO);
  const noAdvanceRandomNumbers = Array(racingCount * numberOfCars).fill(STOP);

  test("경주가 racingCount만큼 진행된다", () => {
    mockRandoms(advanceRandomNumbers);

    app.runRacing(carsStatus, racingCount);

    // {자동차 개수 + 1 (공백)} * 레이싱 횟수 + 1 (우승자)
    expect(Console.print).toHaveBeenCalledTimes(
      (numberOfCars + 1) * racingCount + 1
    );
  });

  test("자동차가 진행될 경우, 진행 상태가 정확하게 출력된다", () => {
    mockRandoms(advanceRandomNumbers);

    app.runRacing(carsStatus, racingCount);

    expect(Console.print).toHaveBeenCalledWith("Car1 : -");
    expect(Console.print).toHaveBeenCalledWith("Car2 : -");
  });

  test("자동차가 진행되지 않을 경우, 진행 상태가 정확하게 출력된다", () => {
    mockRandoms(noAdvanceRandomNumbers);

    app.runRacing(carsStatus, racingCount);

    expect(Console.print).toHaveBeenCalledWith("Car1 : ");
    expect(Console.print).toHaveBeenCalledWith("Car2 : ");
  });

  test("단독 우승하는 경우", () => {
    const numbers = advanceRandomNumbers.map((number, idx) =>
      idx % 2 === 0 ? number : STOP
    );

    mockRandoms(numbers);

    app.runRacing(carsStatus, racingCount);

    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : Car1");
  });

  test("둘이 동시에 우승하는 경우", () => {
    mockRandoms(advanceRandomNumbers);

    app.runRacing(carsStatus, racingCount);

    expect(Console.print).toHaveBeenCalledWith("최종 우승자 : Car1, Car2");
  });
});
