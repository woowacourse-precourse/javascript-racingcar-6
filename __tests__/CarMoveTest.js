import { Random } from "@woowacourse/mission-utils";
import Car from "../src/model/Car.js";

jest.mock("@woowacourse/mission-utils", () => {
  return {
    ...jest.requireActual("@woowacourse/mission-utils"),
    Random: {
      pickNumberInRange: jest.fn()
    }
  };
});

describe("Car 클래스의 전진하는 move() 테스트", () => {
  let car;

  beforeEach(() => {
    car = new Car("test");
  });

  test("랜덤 숫자가 4 이상일 경우 전진", () => {
    Random.pickNumberInRange.mockReturnValue(4);
    car.move(4);
    expect(car.getPosition()).toBe(2); 
  });

  test("랜덤 숫자가 4 미만일 경우 전진하지 않음", () => {
    Random.pickNumberInRange.mockReturnValue(3);
    car.move(3);
    expect(car.getPosition()).toBe(1); 
  });
});