import Car from "../src/Car";
import { Random } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => {
  return {
    Random: {
      pickNumberInRange: jest.fn(),
    },
  };
});

describe("Car 클래스 테스트", () => {
  beforeEach(() => {
    Random.pickNumberInRange.mockClear();
  });

  test("Car 클래스 move 메서드 테스트 - 전진", () => {
    const car = new Car("Car1");
    Random.pickNumberInRange.mockReturnValue(4);
    car.move();
    expect(car.getPosition()).toBe(1);
  });

  test("Car 클래스 move 메서드 테스트 - 정지", () => {
    const car = new Car("Car1");
    Random.pickNumberInRange.mockReturnValue(3);
    car.move();
    expect(car.getPosition()).toBe(0);
  });
});
