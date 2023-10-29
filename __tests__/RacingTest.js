import App from "../src/App.js";
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

describe("자동차 경주 게임", () => {
  test("게임 테스트1", async () => {
    const inputs = ["pobi,woni,john", "3"];
    const outputs = [
      "pobi : -",
      "woni : ",
      "john : -",
      "\n",
      "pobi : --",
      "woni : ",
      "john : --",
      "\n",
      "pobi : --",
      "woni : -",
      "john : --",
      "\n",
      "최종 우승자 : pobi,john",
    ];
    const randoms = [9, 1, 4, 5, 2, 4, 3, 6, 3];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("게임 테스트2", async () => {
    const inputs = ["pobi,woni,john,yeom", "5"];
    const outputs = [
      "pobi : -",
      "woni : ",
      "john : -",
      "yeom : -",
      "\n",
      "pobi : --",
      "woni : -",
      "john : --",
      "yeom : --",
      "\n",
      "pobi : ---",
      "woni : --",
      "john : ---",
      "yeom : ---",
      "\n",
      "pobi : ----",
      "woni : ---",
      "john : ----",
      "yeom : ----",
      "\n",
      "pobi : -----",
      "woni : ----",
      "john : -----",
      "yeom : -----",
      "\n",
      "최종 우승자 : pobi,john,yeom",
    ];
    const randoms = [
      9, 1, 4, 5, 6, 4, 4, 6, 5, 6, 7, 8, 9, 8, 7, 6, 4, 5, 6, 7,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("시도할 횟수에 대한 예외 처리(음수)", async () => {
    const inputs = ["pobi,john", "-1"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("시도할 횟수에 대한 예외 처리(문자)", async () => {
    const inputs = ["pobi,john", "abc"];
    mockQuestions(inputs);
    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
