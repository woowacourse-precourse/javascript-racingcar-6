import Car from "../src/Car.js";
import { CONSTANTS } from "../src/Constants.js";
import { Console, Random } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Console: {
    print: jest.fn(),
  },
  Random: {
    pickNumberInRange: jest.fn(),
  },
}));

describe("Car 클래스", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("이름 길이가 제한을 초과하면 오류를 던진다", () => {
    expect(() => new Car("VeryLongCarName")).toThrow("[ERROR]이름의 길이가 5자를 초과합니다.");
  });

  test("자동차를 생성할 때 MIN_DISTANCE로 초기화화 한다", () => {
    const car = new Car("MyCar");
    expect(car.position).toBe(CONSTANTS.MIN_DISTANCE);
  });

  test("랜덤 숫자가 MIN_MOVE_VALUE 이상이면 자동차를 움직인다", () => {
    Random.pickNumberInRange.mockReturnValue(CONSTANTS.MIN_MOVE_VALUE);
    
    const car = new Car("MyCar");
    car.move();

    expect(car.position).toBe(CONSTANTS.MIN_DISTANCE + 1);
    expect(Console.print).toHaveBeenCalledWith("MyCar : -");
  });

  test("랜덤 숫자가 MIN_MOVE_VALUE 미만이면 자동차를 움직이지 않는다", () => {
    Random.pickNumberInRange.mockReturnValue(CONSTANTS.MIN_MOVE_VALUE - 1);

    const car = new Car("MyCar");
    car.move();

    expect(car.position).toBe(CONSTANTS.MIN_DISTANCE);
    expect(Console.print).toHaveBeenCalledWith("MyCar : ");
  });

  test("printCurrentRace는 자동차의 현재 위치를 표시한다", () => {
    const car = new Car("MyCar");
    car.position = 3;
    car.printCurrentRace();

    expect(Console.print).toHaveBeenCalledWith("MyCar : ---");
  });
});
