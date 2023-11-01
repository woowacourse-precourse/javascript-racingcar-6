import Car from "../src/Car.js";

describe("자동차 클래스 생성 테스트", () => {
  test("인스턴스가 정상적으로 생성 되는지", () => {
    const car = new Car("test");
    expect(car).toBeInstanceOf(Car);
    expect(car.getName()).toBe("test");
    expect(car.getMoveCount()).toBe(0);
  });

  test.each([true, false])("자동차 이동 정상 동작 여부", (canMoveState) => {
    const car = new Car("test");
    car.canMove = jest.fn().mockReturnValue(canMoveState);
    const initialValue = car.getMoveCount();

    car.move();

    expect(car.canMove).toHaveBeenCalled();
    if (canMoveState) {
      expect(car.getMoveCount()).toBe(initialValue + 1);
    } else {
      expect(car.getMoveCount()).toBe(initialValue);
    }
  });
});
