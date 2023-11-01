import Computer from "../src/RacingCar/Computer.js";
import { Random, Console } from "@woowacourse/mission-utils";

const mockRandoms = (number) => {
  Random.pickNumberInRange = jest.fn();
  Random.pickNumberInRange.mockReturnValue(number);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 이동 테스트", () => {
  let computer;
  beforeEach(() => {
    computer = new Computer();
  })

  test("랜덤 값이 4 이상인 경우 앞으로 이동", () => {
    const MOVING = 4;
    const arg = ["bin"];

    mockRandoms(MOVING);

    const currentCars = computer.moveCars(arg);

    expect(currentCars).toHaveProperty("bin", 1);
  });

  test("현재 이동 거리 출력", () => {
    const arg = { bin: 3 };
    const output = "bin : ---";
    const logSpy = getLogSpy();

    computer.printCurrent(arg);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});