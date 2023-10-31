import { RacingResult } from "../../src/Controllers/index.js";
import { OutputView } from "../../src/Views/index.js";
import { Car } from "../../src/Models/index.js";

jest.mock("../../src/Views/OutputView", () => ({
  printWinner: jest.fn(),
}));

describe("RacingResult", () => {
  test("announceWinner는 우승자의 이름을 출력할 때 printWinner를 호출해야 함", () => {
    // given
    const cars = [new Car("jeen"), new Car("eric"), new Car("terry")];

    cars[0].totalDistance = 5;
    cars[1].totalDistance = 10;
    cars[2].totalDistance = 3;

    // when
    RacingResult.announceWinner(cars);

    // then
    expect(OutputView.printWinner).toHaveBeenCalledWith("eric");
  });

  test("announceWinner 동점을 처리", () => {
    // given
    const cars = [new Car("jeen"), new Car("eric"), new Car("terry")];

    cars[0].totalDistance = 10;
    cars[1].totalDistance = 10;
    cars[2].totalDistance = 3;

    // when
    RacingResult.announceWinner(cars);

    // then
    expect(OutputView.printWinner).toHaveBeenCalledWith("jeen, eric");
  });
});
