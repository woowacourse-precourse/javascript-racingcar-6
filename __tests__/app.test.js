import App from "../src/App";
import { Console, Random } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils");

beforeEach(() => {
  Console.readLineAsync.mockReset();
  Console.print.mockReset();
  Random.pickNumberInRange.mockReset();
});

describe("App", () => {
  test("moveCars", () => {
    // Mock the behavior of Random.pickNumberInRange
    const mockRandomPickNumberInRange = jest.spyOn(Random, "pickNumberInRange");
    mockRandomPickNumberInRange
      .mockReturnValueOnce(5) // First call returns 5
      .mockReturnValueOnce(2) // Second call returns 2
      .mockReturnValueOnce(8); // Third call returns 8

    const app = new App();
    const carForwards = [0, 0, 0];
    app.moveCars(carForwards);

    expect(carForwards).toEqual([1, 0, 1]);

    // Restore the original implementation of Random.pickNumberInRange
    mockRandomPickNumberInRange.mockRestore();
  });

  test("printCarStatus", () => {
    const app = new App();
    const carForwards = [1, 0, 2];
    const carNames = ["Car1", "Car2", "Car3"];

    app.printCarStatus(carForwards, carNames);
    expect(Console.print).toHaveBeenCalledTimes(3);
    expect(Console.print).toHaveBeenNthCalledWith(1, "Car1 : -");
    expect(Console.print).toHaveBeenNthCalledWith(2, "Car2 : ");
    expect(Console.print).toHaveBeenNthCalledWith(3, "Car3 : --");
  });
});
