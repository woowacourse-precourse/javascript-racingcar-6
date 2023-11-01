import Car from "../src/Car.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import NUMBER from "../src/constant/NUMBER.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("자동차 테스트", () => {
  test.each([
    ["modi", "modi", 0],
    ["woo", "woo", 0],
  ])("인스턴스 생성 - %s", (input, expectedName, expectedPosition) => {
    const car = new Car(input);

    expect(car.name).toBe(expectedName);
    expect(car.position).toBe(expectedPosition);
  });

  test.each([
    ["move", NUMBER.MIN_FORWARD, 1],
    ["stop", NUMBER.MIN_FORWARD - 1, 0],
  ])("랜덤값이 4 이상일 때 전진 - %s", (name, randomNum, expectedPosition) => {
    mockRandoms([randomNum]);

    const car = new Car(name);
    expect(car.moveRandomly().position).toBe(expectedPosition);
  });
});
