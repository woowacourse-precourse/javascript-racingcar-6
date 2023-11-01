import RacingExecutor from "../../src/Controllers/RacingExecutor.js";
import { OutputView } from "../../src/Views/index.js";
import Car from "../../src/Models/Car.js";

jest.mock("../../src/Views/OutputView.js", () => ({
  printResultMessage: jest.fn(),
  printOneRound: jest.fn(),
}));

describe("RacingExecutor", () => {
  test("runRaces는 printResultMessage를 1번 호출하고 raceround번 printOneRound을 호출해야함", () => {
    // given
    const raceround = 5;
    const cars = [new Car("hani"), new Car("minji")];

    cars.forEach((car) => {
      car.race = jest.fn();
    });

    // when
    RacingExecutor.runRaces(cars, raceround);

    // then
    expect(OutputView.printResultMessage).toHaveBeenCalledTimes(1);
    expect(OutputView.printOneRound).toHaveBeenCalledTimes(raceround);

    cars.forEach((car) => {
      expect(car.race).toHaveBeenCalledTimes(raceround);
    });
  });
});
