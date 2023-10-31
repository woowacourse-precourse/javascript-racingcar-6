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
    const outputs = ["pobi : -"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("실행 결과", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("실행 결과"));
  });

  test("최종 우승자", async () => {
    const MOVING_FORWARD = 9;
    const STOP = 9;
    const inputs = ["pobi,woni", "1"];
    const randoms = [MOVING_FORWARD, STOP];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    const app = new App();
    await app.play();

    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("최종 우승자 : pobi, woni")
    );
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])(
    "이름에 대한 예외 처리",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );

  test.each([[["tony,julia"], "a"]])(
    "실행 횟수롤 숫자가 아닌 값 입력시 오류",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );

  test.each([[["tony,julia"], "-1"]])(
    "실행 횟수롤 음수 입력시 오류",
    async (inputs) => {
      mockQuestions(inputs);

      const app = new App();

      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
});
