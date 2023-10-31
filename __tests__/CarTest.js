import Car from "../src/Car.js";

describe("자동차 전진-정지 판단", () => {
  const car = new Car();

  test("자동차 전진", () => {
    car.decision_number = 4;
    car.moveOneStep();
    expect(car.move_times).toBe(1);
  });
  test("자동차 정지", () => {
    car.decision_number = 3;
    car.moveOneStep();
    expect(car.move_times).toBe(1);
  });
});
