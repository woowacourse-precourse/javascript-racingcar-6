import Car from "../src/models/Car";

describe("Car 테스트", () => {
  test("Car 인스턴스 생성", () => {
    const car = new Car("test");
    expect(car.name).toBe("test");
    expect(car.position).toBe(0);
  });

  test("Car move 메서드 테스트", () => {
    const car = new Car("test");
    car.move();
    expect(car.position).toBeGreaterThanOrEqual(0);
  });
});
