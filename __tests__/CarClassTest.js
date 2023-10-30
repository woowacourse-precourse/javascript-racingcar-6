import { Car } from "../src/Car.js";
import { Validation } from "../src/Validation.js";

describe("Car 클래스 테스트", () => {
  let racingCar;
  beforeEach(() => {
    racingCar = new Car("racingCar");
  });

  test("Car 클래스의 생성자로 레이싱카 인스턴스를 생성할 수 있다.", () => {
    expect(racingCar.name).toEqual("racingCar");
    expect(racingCar.moveCount).toEqual(0);
  });

  test("Car 클래스의 moveOrStop 메서드를 실행했을 때, 랜덤으로 생성된 번호가 4 미만일 경우 moveCount가 올라가지 않는다.", () => {
    // given
    const validateGoForwardValue = jest.spyOn(Validation, "validateGoForward");
    validateGoForwardValue.mockReturnValue(false);

    // when
    racingCar.moveOrStop();

    // then
    expect(racingCar.moveCount).toEqual(0);
  });

  test("Car 클래스의 moveOrStop 메서드를 실행했을 때, 랜덤으로 생성된 번호가 4 이상일 경우 moveCount가 1만큼 올라간다.", () => {
    // given
    const validateGoForwardValue = jest.spyOn(Validation, "validateGoForward");
    validateGoForwardValue.mockReturnValue(true);

    // when
    racingCar.moveOrStop();

    // then
    expect(racingCar.moveCount).toEqual(1);
  });
});
