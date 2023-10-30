import Car from "../../src/Car";

describe("Car 인스턴스 초기화 테스트", () => {
  test("자동차 이름 배열을 주면 Car 인스턴스 배열로 반환", () => {
    // given
    const carNames = ["pobi", "lucas", "jigi"];

    // when
    const cars = Car.initializeCars(carNames);

    // then
    cars.forEach((car) => {
      expect(car).toBeInstanceOf(Car);
    });
  });
});
