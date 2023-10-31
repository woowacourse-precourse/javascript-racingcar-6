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
    const logSpy = getLogSpy();

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
