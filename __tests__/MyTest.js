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

describe("자동차 경주 게임 자체 테스트", () => {
  test("전진-정지", async () => {
    const MOVING_FORWARD = 7;
    const STOP = 1;
    const inputs = ["pobi,son,kim", "3"];
    const outputs = ["pobi : -", "son : --", "kim : --"];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, STOP, MOVING_FORWARD, STOP, STOP, STOP, MOVING_FORWARD];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("입력할 때 5글자가 넘어가는 입력을 받는 경우", async () => {
    const inputs = ["ppobbi,kim,son"];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수를 입력할 때 음수를 입력한 경우", async () => {
    const inputs = ["pobi,son", "-5"];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수를 입력할 때 문자를 입력한 경우", async () => {
    const inputs = ["pobi,son", "five"];

    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});

