const Car = require("../src/Car.js");

describe("Car 클래스 테스트", () => {
  test("Car 전진 테스트", () => {
    const car = new Car("pobi");
    car.move(true);
    expect(car.position).toBe(1);
  });
});
