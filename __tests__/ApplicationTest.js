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

  test("inputCarName 함수 테스트", async () => {
    const inputs = ["pobi,woni"];
    const expectedOutput = ["pobi", "woni"];
    mockQuestions(inputs);

    const app = new App();
    const result = await app.inputCarName();

    expect(result).toEqual(expectedOutput);
  });

  test("isValidCarNames 함수 테스트", () => {
    const app = new App();
    app.carNameList = ["pobi", "woni", "jun", "nam", "kona", "   "];

    const result = app.isValidCarNames();

    expect(result).toBe(false);
  });

  test("inputAttemptCount 함수 테스트", async () => {
    const app = new App();

    const inputs = ["5"];
    mockQuestions(inputs);

    const result = await app.inputAttemptCount();

    expect(result).toBe(5);
    expect(MissionUtils.Console.readLineAsync).toHaveBeenCalledWith("");
  });

  test("getLeadingCarNames 함수 테스트", async () => {
    const app = new App();

    app.carNameList = ["car1", "car2", "car3"];
    app.dashSymbol = ["---", "---", "----"];

    const result = app.getLeadingCarNames();

    expect(result).toEqual(["car3"]);
  });

  test("getFinalWinner 함수 테스트", async () => {
    const inputs = ["pobi,woni"];
    mockQuestions(inputs);

    const app = new App();
    const printSpy = jest.spyOn(MissionUtils.Console, "print");
    app.getFinalWinner(["pobi", "woni"]);

    expect(printSpy).toHaveBeenCalledWith("최종 우승자 : pobi, woni");
  });

  test.each([[["pobi,javaji"]], [["pobi,eastjun"]]])(
    "이름에 대한 예외 처리",
    async (inputs) => {
      // given
      mockQuestions(inputs);

      // when
      const app = new App();

      // then
      await expect(app.play()).rejects.toThrow("[ERROR]");
    }
  );
});
