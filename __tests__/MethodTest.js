import { MissionUtils } from "@woowacourse/mission-utils";
import Car from '../racingcar.js';
import App from '../App.js';

describe("App", () => {
  let app;

  beforeEach(() => {
    app = new App();
  });

  test("validateCarNames throws error when car name is invalid", () => {
    const invalidCar = new Car("InvalidName");
    app.cars.push(invalidCar);

    // Mock the isValidName method to return false
    invalidCar.isValidName = jest.fn().mockReturnValue(false);

    expect(() => app.validateCarNames()).toThrow(Error);
  });

  test("playRound calls move method of each car", () => {
    const car1 = new Car("car1");
    const car2 = new Car("car2");

    // Mock the move methods
    car1.move = jest.fn();
    car2.move = jest.fn();

    app.cars.push(car1, car2);

    app.playRound();

    expect(car1.move).toHaveBeenCalled();
    expect(car2.move).toHaveBeenCalled();
  });

  // Add more tests...
});
