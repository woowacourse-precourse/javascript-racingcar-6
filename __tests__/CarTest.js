import Car from "../src/Car";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("Car 테스트", () => {
  test("전진-정지-전진", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD];
    const output = 2;

    mockRandoms([...randoms]);

    // when
    const car = new Car("pobi");
    randoms.forEach(() => car.move());

    // then
    expect(car.getMileage()).toBe(output);
  });
});
