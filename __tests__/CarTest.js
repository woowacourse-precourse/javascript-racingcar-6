import Car from "../src/Car";

describe("Car 클래스", () => {
  test("자동차 이름 받아서 인스턴스 생성", () => {
    const car = new Car("car1");
    expect(car.name).toBe("car1");
    expect(car.distance).toBe(0);
  });
});
