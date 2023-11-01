import RacingCar from "../../src/RacingCar";

describe("RacingCar 인스턴스 초기화 테스트", () => {
  test("자동차 이름 배열을 주면 RacingCar 인스턴스 배열로 반환", () => {
    // given
    const carNames = ["pobi", "lucas", "jigi"];

    // when
    const racingCars = RacingCar.initializeCars(carNames);

    // then
    racingCars.forEach((racingCar) => {
      expect(racingCar).toBeInstanceOf(RacingCar);
    });
  });
});
