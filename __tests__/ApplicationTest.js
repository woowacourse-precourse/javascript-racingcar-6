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

  test("한번의 라운드가 아닐 때", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "3"];
    const outputs = [
      "pobi : -",
      "pobi : --",
      "pobi : ---",
      "woni : -",
      "woni : --",
      "woni : ---",
    ];
    const randoms = [
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
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

  test("input값 없을 떄", async () => {
    // given
    const inputs = [""];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    // when
    const app = new App();
    await expect(app.play()).rejects.toThrow(
      "[ERROR] 자동차 이름을 입력해주세요."
    );

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 자동차 이름을 입력해주세요.")
    );
  });

  test("자동차 이름 유효성 확인", async () => {
    // given
    const inputs = ["this name is too long,java"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);

    // when
    const app = new App();
    await expect(app.play()).rejects.toThrow(
      "[ERROR] 자동차 이름의 길이가 5 초과 입니다."
    );

    // then
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("[ERROR] 자동차 이름의 길이가 5 초과 입니다.")
    );
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
