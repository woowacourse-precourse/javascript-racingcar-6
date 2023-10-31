import { MissionUtils } from "@woowacourse/mission-utils";
import Controllers from "../src/Controllers/index.js";
import Model from "../src/Models/index.js";

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

describe("자동차 이름 입력", () => {
  test("정상적인 값 입력 시", async () => {
    const input = ["woon,toon"];

    mockQuestions(input);

    // when
    const controllers = new Controllers();
    const result = await controllers.getUserInput(...input);

    // then
    expect(result).toEqual(["woon", "toon"]);
  });

  test("빈 공백 입력 시 예외처리", async () => {
    const input = [""];

    mockQuestions(input);

    // when
    const controllers = new Controllers();
    const result = controllers.getUserInput(...input);

    //then
    await expect(result).rejects.toThrow("[ERROR]");
  });
});

describe("게임 시도 횟수 입력", () => {
  test("정상적인 값 입력 시", async () => {
    const input = ["5"];

    mockQuestions(input);

    // when
    const controllers = new Controllers();
    const result = await controllers.getTryTimes();

    //then
    expect(result).toEqual(["5"]);
  });

  test("숫자가 아닌 값을 입력 시", async () => {
    const input = ["XX"];

    mockQuestions(input);

    // when
    const controllers = new Controllers();
    const result = controllers.getTryTimes();

    //then
    await expect(result).rejects.toThrow("[ERROR]");
  });
});

describe("시도횟수 만큼 반복한 각 자동차의 이동 거리 계산", () => {
  const model = new Model();
  const controllers = new Controllers();

  test("정상적으로 계산이 이루어졌을 때", async () => {
    const cars = ["caro", "cari"];
    const tryTime = 3;

    mockRandoms([5, 3, 5, 2, 6, 2]);

    model.removeWhitespace = jest.fn((carName) => carName);
    model.setInitialCarMovePoint = jest.fn(() => {
      return { caro: 0, cari: 0 };
    });
    controllers.repeatCarRacing = jest.fn(() => {
      return { caro: 3, cari: 0 };
    });

    //when
    const result = await controllers.carMoveCheck(cars, tryTime);

    //then
    expect(result).toEqual({ cars, moveResult: { caro: 3, cari: 0 } });
  });

  test("자동차 이름이 5글자 이상일 시 예외처리", async () => {
    const cars = ["abcdef", "gghhf"];
    const tryTime = 1;

    //when
    const result = controllers.carMoveCheck(cars, tryTime);

    //then
    await expect(result).rejects.toThrow("[ERROR]");
  });

  test("잘못된 형식의 이름을 입력 시 예외처리", async () => {
    const cars = ["l#uc", "@ㅡ@"];
    const tryTime = 1;

    //when
    const result = controllers.carMoveCheck(cars, tryTime);

    //then
    await expect(result).rejects.toThrow("[ERROR]");
  });
});

test("입력한 시도횟수 만큼 게임 반복", async () => {
  const model = new Model();
  const controllers = new Controllers();

  const cars = ["carl", "kay"];
  const tryTime = 3;
  const move = { carl: 0, kay: 0 };
  const logSpy = getLogSpy();

  mockRandoms([6, 6, 6, 6, 6, 6]);

  model.repeatMessage = jest.fn(() => {
    return "---";
  });

  //when
  const result = await controllers.repeatCarRacing(move, cars, tryTime);

  //then
  expect(result).toEqual({ carl: 3, kay: 3 });
  expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("kay : ---"));
});
