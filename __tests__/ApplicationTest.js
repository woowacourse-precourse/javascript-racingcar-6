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
    const inputs = ["pobi,woni", "1"];
    // Added the expected winner print
    const outputs = ["pobi : ", "woni : ", "\n", "최종 우승자 : pobi"];

    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledTimes(outputs.length);

    outputs.forEach((output, idx) => {
      expect(logSpy.mock.calls[idx][0]).toContain(output);
    });
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])(
    "이름에 대한 예외 처리",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
});

describe("자동차 이름 길이에 대한 예외 처리", () => {
  test.each([["pobiiii,woni"], ["a,b,c,d,e,f"]])(
    "이름 길이 예외 처리",
    async (inputs) => {
      mockQuestions([inputs]);

      const app = new App();
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
});
