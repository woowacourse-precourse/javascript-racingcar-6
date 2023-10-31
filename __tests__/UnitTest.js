import { MissionUtils } from "@woowacourse/mission-utils";
import Controllers from "../src/Controllers/index.js";

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
