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
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "4"];
    const outputs = ["pobi : -", "woni : ", "pobi : --", "woni : -"];
    const randoms = [MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("최종 우승자 출력 기능", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["cho,min,gi", "1"];
    const randoms = [MOVING_FORWARD, STOP, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    const logCalls = logSpy.mock.calls.map((call) => call[0]);
    const lastOutput = logCalls[logCalls.length - 1];

    expect(lastOutput).toContain("최종 우승자 : cho");
  });
  test("최종 우승자(공동우승) 출력 기능", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["cho,min,gi", "2"];
    const randoms = [MOVING_FORWARD, STOP, STOP, STOP, STOP, MOVING_FORWARD];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    const logCalls = logSpy.mock.calls.map((call) => call[0]);
    const lastOutput = logCalls[logCalls.length - 1];

    expect(lastOutput).toContain("최종 우승자 : cho, gi");
  });
  test.each([[["empty,"]], [["carNameOver,car"]]])(
    "차량 이름 입력에 대한 예외 처리",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
  test.each([
    [["car1,car2", "-1"]],
    [["car3,car4", "0"]],
    [["car5,car6", "a"]],
  ])("횟수 입력에 대한 예외 처리", async (inputs) => {
    mockQuestions(inputs);

    const app = new App();

    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
