import Race from "../src/Race.js";
import Car from "../src/Car.js";

describe("Race 클래스 테스트", () => {
  it("올바른 차량 타입이 아닐 경우 에러를 발생시키는지 확인", () => {
    const invalidCar = {};
    const cars = [new Car("Car1"), new Car("Car2"), invalidCar];
    expect(() => new Race(cars, 5)).toThrow("[ERROR] 경주에 맞는 올바른 차량 타입이 아닙니다.");
  });
});