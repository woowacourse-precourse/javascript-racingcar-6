import Car from "../src/Car.js";

describe("Car 클래스 테스트", () => {
    test("올바른 이름으로 Car 객체가 생성되는지 테스트", () => {
      const car = new Car("example");
      expect(car).toBeDefined();
    });
  
    test("5자를 초과하는 이름으로 Car 객체가 생성되지 않는지 테스트", () => {
      expect(() => new Car("richard123")).toThrow();
    });
  
    test("임계값 이상의 값을 받았을 때 Car가 정상적으로 이동하는지 테스트", () => {
      const car = new Car("test");
      car.move(4);
      expect(car.getPosition()).toBe(1);
    });
  });