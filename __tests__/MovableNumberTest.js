import { Random } from "@woowacourse/mission-utils"; // 필요한 모듈 import
import MovableNumber from "../src/model/movement/movableNumber";

describe("MovableNumber 클래스 테스트", () => {
  const movableNumber = new MovableNumber();

  test("generateRandomNumber 메서드 테스트", () => {
    Random.pickNumberInRange = jest.fn(() => 3);

    const randomMoveNumber = movableNumber.generateRandomNumber();

    expect(randomMoveNumber).toBe(3);
  });

  test("isMovable 메서드 테스트 - 움직일 경우", () => {
    Random.pickNumberInRange = jest.fn(() => 4);

    const isMovableResult = movableNumber.isMovable();

    expect(isMovableResult).toBe(true);
  });

  test("isMovable 메서드 테스트 - 움직이지 않을 경우", () => {
    Random.pickNumberInRange = jest.fn(() => 3);

    const isMovableResult = movableNumber.isMovable();

    expect(isMovableResult).toBe(false);
  });
});
