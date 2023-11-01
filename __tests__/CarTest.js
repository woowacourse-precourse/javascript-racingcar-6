import Car from "../src/Car";

describe("Car class 메서드 테스트", () => {
    let car;
  
    beforeEach(() => {
      car = new Car("djun");
    });
  
    test("생성자가 올바른 차 이름을 생성", () => {
      const result = car.name;
      expect(result).toBe("djun");
    });
  
    test("생성자가 올바른 이동 거리를 생성", () => {
      const result = car.distance;
      expect(result).toBe(0);
    });
  
    test("moveForward가 올바른 이동거리(-)를 반환", () => {
      car.moveForward();
      const result_num = car.distance;
      const result_shape = car.shapeOfDistance;
      expect(result_num).toBe(1);
      expect(result_shape).toBe("-");
    });
  });
  