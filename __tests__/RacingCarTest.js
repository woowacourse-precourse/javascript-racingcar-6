import RacingCar from "../src/model/car/racingCar";
import MovableNumber from "../src/model/movement/movableNumber";

describe("RacingCar 클래스 테스트", () => {
  const car = new RacingCar("car");
  test("getName 메서드 테스트", () => {
    const name = car.getName();

    expect(name).toBe("car");
  });

  test("getMoveCount 메서드 테스트", () => {
    const moveCount = car.getMoveCount();

    expect(moveCount).toBe(0);
  });

  test("move 메서드 테스트 - 움직이지 않았을 때", () => {
    MovableNumber.prototype.isMovable = jest.fn(() => false);

    car.move();

    const moveCount = car.getMoveCount();
    expect(moveCount).toBe(0);
  });

  test("move 메서드 테스트 - 움직였을 때", () => {
    MovableNumber.prototype.isMovable = jest.fn(() => true);

    car.move();

    const moveCount = car.getMoveCount();
    expect(moveCount).toBe(1);
  });
});
