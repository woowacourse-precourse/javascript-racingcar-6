import Car from "../../src/Model/Car.js";

describe("Car 모델 테스트", () => {
  test("자동차 이름이 5자 초과인 경우 예외를 발생시킨다", () => {
    // given
    const carName = "pobiii";

    // when
    const result = () => new Car(carName);

    // then
    expect(result).toThrow("[ERROR]");
  });

  test("move 함수는 자동차의 위치를 1만큼 증가시킨다", () => {
    // given
    const car = new Car("pobi");

    // when
    car.move();

    // then
    expect(car.getCarInfo().position).toBe(1);
  });

  test("getCarInfo 함수는 자동차의 이름과 위치를 반환한다", () => {
    // given
    const car = new Car("pobi");

    // when
    const result = car.getCarInfo();

    // then
    expect(result).toEqual({ name: "pobi", position: 0 });
  });
});
