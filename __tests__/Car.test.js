import Car from "../src/Car.js";

describe("Car 클래스 테스트", () => {
  test.each([
    ["pobi", "pobi", 0],
    ["woni", "woni", 0],
    ["jun", "jun", 0],
  ])("new Car(%s) 테스트", (carName, expectedCarName, expectedDistance) => {
    const car = new Car(carName);
    expect(car.carName).toBe(expectedCarName);
    expect(car.distance).toBe(expectedDistance);
  });

  test.each([
    ["1", 1, 1],
    ["3", 3, 3],
  ])("Car Move - %s 테스트", (power_string, power, expectedDistance) => {
    const car = new Car("pobi");
    car.move(power);
    expect(car.distance).toBe(expectedDistance);
  });

  test.each([
    ["pobi", { carName: "pobi", distance: 5 }, 5],
    ["woni", { carName: "woni", distance: 0 }, 0],
  ])("Car Status - %s 테스트", (carStatus, expectedCarStatus, power) => {
    const car = new Car(carStatus);
    car.move(power);
    expect(car.carStatus).toEqual(expectedCarStatus);
  });
});
