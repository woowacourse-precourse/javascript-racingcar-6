import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/Car.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("자동차 전진 관련 테스트", () => {
  test("숫자가 4 이상으로 나오면 true를 반환한다", () => {
    const car = new Car();

    mockRandoms([5]);

    expect(car.chooseGoOrStop()).toBe(true);
  });

  test("숫자가 4 미만으로 나오면 false를 반환한다", () => {
    const car = new Car();

    mockRandoms([3]);

    expect(car.chooseGoOrStop()).toBe(false);
  });
});
