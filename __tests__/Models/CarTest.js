import Car from "../../src/Models/Car.js";
import { Random } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, Random.pickNumberInRange);
};

describe("Car 기능 테스트", () => {
  test("Car 생성", () => {
    // given
    const input = "최가나";

    // when
    const car = new Car(input);
    const name = car.name;
    const totalDistance = car.totalDistance;

    // then
    expect(name).toEqual("최가나");
    expect(totalDistance).toEqual(0);
  });

  test("랜덤값이 4 이상인 경우 전진함", () => {
    // given
    const MOVING_FORWARD = 4;
    const randoms = [MOVING_FORWARD];

    mockRandoms(randoms);

    // when
    const car = new Car("최가나");
    car.race();

    // then
    expect(car.totalDistance).toEqual(MOVING_FORWARD);
  });

  test("랜덤값이 3 이하인 경우 정지함", () => {
    // given
    const STOP = 3;
    const randoms = [STOP];

    mockRandoms(randoms);

    // when
    const car = new Car("최가나");
    car.race();

    // then
    expect(car.totalDistance).toEqual(0);
  });
});
