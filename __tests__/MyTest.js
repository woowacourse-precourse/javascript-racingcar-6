import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

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
  test.each([
    [["woo,tech,course", "5"]],
    [["   ,tech,co", "5"]],
    [[",tech,co", "5"]],
  ])("자동차 이름 글자에 대한 예외처리", async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});

describe("게임 횟수 입력", () => {
  test.each([
    [["woo,tech,co", "0"]],
    [["woo,tech,co", "-1"]],
    [["woo,tech,co", "abc"]],
  ])("게임 횟수에 대한 예외처리", async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});

describe("자동차 경주 게임", () => {
  test.each([
    [[9, 0]],
    [[8, 1]],
    [[7, 2]],
    [[6, 3]],
    [[5, 3]],
    [[4, 3]],
  ])("전진-정지", async (randoms) => {
    // given
    const inputs = ["woo,tech", "1"];
    const outputs = [
      ["woo : -"],
      ["tech : "],
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(...output));
    });
  });
});

describe("우승자 출력", () => {
  test("단독 우승", async () => {
    // given
    const inputs = ["woo,tech", "1"];
    const outputs = ["우승자: woo"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([9, 0]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("공동 우승", async () => {
    // given
    const inputs = ["woo,tech", "1"];
    const outputs = ["우승자: woo, tech"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([9, 9]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});

