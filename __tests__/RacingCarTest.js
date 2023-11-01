import MovableNumber from "../src/model/movement/movableNumber";
import RacingCars from "../src/model/car/racingCars";

describe("RacingCars 클래스 테스트", () => {
  test("createCars 메서드 테스트", () => {
    const racingCars = new RacingCars();
    const inputNamesString = "car1,car2";

    racingCars.createCars(inputNamesString);

    const cars = racingCars.getCars();
    expect(cars.length).toBe(2);
  });

  test("createCar 메서드 테스트", () => {
    const racingCars = new RacingCars();
    const carName = "car1";

    racingCars.createCar(carName);

    const cars = racingCars.getCars();

    expect(cars.length).toBe(1);
  });

  test("moveAllCars 메서드 테스트", () => {
    MovableNumber.prototype.isMovable = jest.fn().mockReturnValue(true);

    const racingCars = new RacingCars();

    racingCars.createCar("car1");
    racingCars.createCar("car2");

    racingCars.moveAllCars();

    const cars = racingCars.getCars();
    cars.forEach((car) => {
      expect(car.getMoveCount()).toBe(1);
    });
  });
});
