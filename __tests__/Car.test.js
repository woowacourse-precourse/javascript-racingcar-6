import Car from "../src/models/Car";
import { MissionUtils } from "@woowacourse/mission-utils";
import {
  ERROR_MESSAGE,
  MOVE_THRESHOLD,
  MAX_CAR_NAME_LENGTH,
} from "../src/constants";

const MOVING_FORWARD = MOVE_THRESHOLD;
const STOP = 1;

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Car 클래스 테스트", () => {
  test(`${MAX_CAR_NAME_LENGTH}자 이하의 이름을 받으면 해당 이름을 가지는 자동차 객체를 생성한다`, () => {
    // given
    const name = "a".repeat(MAX_CAR_NAME_LENGTH);

    // when
    const car = new Car(name);

    // then
    expect(car.getName()).toEqual(name);
  });

  test(`${MAX_CAR_NAME_LENGTH}자를 초과하는 이름을 입력받으면 에러를 발생시킨다.`, () => {
    // given
    const name = "a".repeat(MAX_CAR_NAME_LENGTH + 1);

    // when & then
    expect(() => new Car(name)).toThrow(
      `[ERROR] ${ERROR_MESSAGE.invalidLength(5)}`
    );
  });

  test("빈 문자열의 이름을 입력받으면 에러를 발생시킨다.", () => {
    // given
    const name = "";

    // when & then
    expect(() => new Car(name)).toThrow(
      `[ERROR] ${ERROR_MESSAGE.isCarNameNull}`
    );
  });

  test(`이동을 시도하는 메서드가 호출되었을 때 ${MOVE_THRESHOLD} 이상의 값을 받으면 position을 1 증가시킨다.`, () => {
    // given
    const car = new Car("test");
    mockRandoms([MOVING_FORWARD]);

    // when
    car.attemptMove();

    // then
    expect(car.getPosition()).toEqual(1);
  });

  test(`이동을 시도하는 메서드가 호출되었을 때 ${
    MOVE_THRESHOLD - 1
  }이하의 값을 받으면 이동하지 않는다.`, () => {
    // given
    const car = new Car("test");
    mockRandoms([STOP]);

    // when
    car.attemptMove();

    // then
    expect(car.getPosition()).toEqual(0);
  });
});
