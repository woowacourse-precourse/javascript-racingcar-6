import Car from "../src/Car";

describe("Car 클래스 테스트", () => {
  test.each([
    ["pobi", "pobi", 0],
    ["woni", "woni", 0],
    ["jun", "jun", 0],
  ])("new Car(%s) 테스트", (carName, expectedCarName, expectedDistance) => {
    const car = new Car(carName);
    expect(car.getCarName()).toBe(expectedCarName);
    expect(car.getDistance()).toBe(expectedDistance);
  });

  test.each([
    ["1", 1, 1],
    ["3", 3, 3],
  ])("Car Move - %s 테스트", (power_string, power, expectedDistance) => {
    const car = new Car("pobi");
    car.move(power);
    expect(car.getDistance()).toBe(expectedDistance);
  });
});
