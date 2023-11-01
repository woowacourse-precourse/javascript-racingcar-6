import Car from "../src/domain/Car.js";
import { STATIC_NUMBER } from "../src/static/Static.js";

describe("Car 클래스 테스트", () => {
  test("Car 클래스의 인스턴스 생성 확인", () => {
    const inputNames = ["pobi", "june", "wang"];
    const cars = inputNames.map((name) => new Car(name));

    cars.forEach((car, index) => {
      expect(car.getName()).toEqual(inputNames[index]);
    });
  });

  test("RacingCar 클래스의 거리값을 잘 받아오는지 확인", () => {
    const car = new Car("pobi");
    const randomNumbers = [1, 0, 4, 0, 5, 3, 8];
    const expectDistance = [0, 0, 1, 1, 2, 2, 3];

    randomNumbers.forEach((number, index) => {
      if (number >= STATIC_NUMBER.canMoveCondition) car.move();

      expect(car.getDistance()).toEqual(expectDistance[index]);
    });
  });
});
