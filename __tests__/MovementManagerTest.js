import { MissionUtils } from "@woowacourse/mission-utils";
import MovementManager from "../src/MovementManager.js";
import RandomNumberGenerator from "../src/RandomNumberGenerator.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("움직임 테스트", () => {
  test("랜덤 숫자가 1,2,3면 움직이지 않고 4,5,6,7,8,9면 움직인다.", () => {
    const movementManager = new MovementManager(new RandomNumberGenerator());
    mockRandoms([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const result = [];
    for (let i = 0; i < 9; i++) {
      result[i] = movementManager.getMovement();
    }
    expect(result).toEqual([0, 0, 0, 1, 1, 1, 1, 1, 1]);
  });
});
