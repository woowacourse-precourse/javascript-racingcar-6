import App from "../src/App.js";
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
  let app;
  beforeEach(() => {
    app = new App;
  })

  test("랜덤 값이 4 이상인 경우 앞으로 이동", () => {
    const MOVING = 4;
    const arg = ["bin"];

    mockRandoms(MOVING);

    const currentCars = app.moveCars(arg);

    expect(currentCars).toHaveProperty("bin", 1);
  });

  test("현재 이동 거리 출력", () => {
    const arg = { bin: 3 };
    const output = "bin : ---";
    const logSpy = getLogSpy();

    app.printCurrent(arg);

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });
});