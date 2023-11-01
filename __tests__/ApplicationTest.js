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

const getReadLineSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "readLineAsync");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임", () => {
  test("입력 문구 테스트", async () => {
    const inputs = ["pobi,woni"];
    const output =
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)";
    const logSpy = getReadLineSpy();

    mockQuestions(inputs);

    const app = new App();
    await app.enterCarNames();
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
  });

  test("자동차 이름 예외처리 : 5자이하 차 이름 입력", async () => {
    const inputs = ["pobi,woniaaaaa"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.play()).rejects.toThrow(
      "[ERROR] : 자동차 이름을 5자 이하로 입력해주세요"
    );
  });

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
