import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/Car";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 전진 테스트", () => {
  test("자동차 숫자 생성 테스트", () => {
    const randoms = [6];

    mockRandoms([...randoms]);

    const result = Car.randomNumGenerate();

    expect(result).toEqual(6);
  });

  test("숫자 확인 후 전진 테스트", () => {
    const randoms = [6];

    mockRandoms([...randoms]);

    const car = new Car("pobi");
    car.move();

    expect(car.position).toEqual(1);
  });

  test("숫자 확인 후 정지 테스트", () => {
    const randoms = [3];

    mockRandoms([...randoms]);

    const car = new Car("pobi");
    car.move();

    expect(car.position).toEqual(0);
  });
});
