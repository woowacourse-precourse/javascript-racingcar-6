import { Random } from "@woowacourse/mission-utils";
import { computerPick, gameResult, gameWinner } from "../src/models/GameCalculator";

describe("GameCalculator", () => {
  test("should return currentPosition + 1 when randomNumber is greater than or equal to 4", () => {
    jest.spyOn(Random, "pickNumberInRange").mockReturnValue(4);

    const currentPosition = 5;
    const expectedPosition = currentPosition + 1;

    expect(computerPick(currentPosition)).toEqual(expectedPosition);
  });

  test("should return car positions after given number of attempts", () => {
    const cars = ["car1", "car2", "car3"];
    const attempts = 5;
    const carPositions = gameResult(cars, attempts);

    for (const car in carPositions) {
      const position = carPositions[car];
      expect(position).toBeGreaterThanOrEqual(0);
      expect(position).toBeLessThanOrEqual(5);
    }
  });

  test("should determine the winners correctly", () => {
    const carPositions = {
      car1: 5,
      car2: 3,
      car3: 2,
      car4: 4,
    };

    const winners = gameWinner(carPositions);

    expect(winners).toEqual(["car1"]);
  });
});
