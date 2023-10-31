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
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
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

  test.each([
    [["pobi,javaji"]],
    [["pobi,eastjun"]],
    [[" "]],
    [["pobi, "]],
    [["pobi,"]],
    [["pobi javaji"]],
    [["javaji"]],
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.carNameInput()).rejects.toThrow("[ERROR]");
  });

  test.each([
    ["a"],
    ["-5"],
    ["3.14"],
    ["abc123"],
    [" "],
    ["1,2,3"]
  ])("시도 횟수에 대한 예외 처리", async (input) => {
    // given
    mockQuestions([input]);

    // when
    const app = new App();

    // then
    await expect(app.numberTimesInput()).rejects.toThrow("[ERROR]");
  });
});
