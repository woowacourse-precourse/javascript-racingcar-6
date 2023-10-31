import Car from "../src/model/Car";

describe("Car 모델", () => {
  // given
  let car;

  beforeEach(() => {
    car = new Car("dummy-car", 0);
  });

  test.each([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
  ])(
    "이동 횟수 x일 때, 이동 결과는 x여야 합니다",
    (moveCount, expectedMoveCount) => {
      // when
      for (let i = 0; i < moveCount; i++) {
        car.move();
      }

      // then
      expect(car.getMoveCount()).toEqual(expectedMoveCount);
    }
  );
});
