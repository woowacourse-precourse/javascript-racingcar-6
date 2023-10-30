import Car from "../src/Car";

describe("Car 객체 Test", () => {
  test("Car 객체 생성자", () => {
    const car = new Car("test");
    expect(car.carName).toEqual("test");
    expect(car.distance).toEqual(0);
  });
});
