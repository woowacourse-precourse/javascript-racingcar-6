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

  test("전진-정지(자동차 3대)", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni,jun", "2"];
    const outputs = ["pobi : --", "woni : -", "jun : -"];
    const randoms = [
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
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

  test("결과 출력(우승자 한 명)", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni,jun", "3"];
    const outputs = ["pobi : ---", "woni : --", "jun : --"];
    const randoms = [
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    const logCalls = logSpy.mock.calls;
    const lastLogCall = logCalls[logCalls.length - 1][0];

    expect(lastLogCall).toContain("최종 우승자 : pobi");
  });

  test("결과 출력(우승자 여러 명)", async () => {
    // given
    const MOVING_FORWARD = 4;
    const inputs = ["pobi,woni,jun", "7"];
    const randoms = Array(28).fill(MOVING_FORWARD);

    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    const logCalls = logSpy.mock.calls;
    const lastLogCall = logCalls[logCalls.length - 1][0];

    expect(lastLogCall).toContain("최종 우승자 : pobi, woni, jun");
  });

  test("결과 출력(자동차 이름 중복 입력 시)", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni,pobi,woni,jun", "3"];
    const randoms = [
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([...randoms]);

    // when
    const app = new App();
    await app.play();

    // then
    const logCalls = logSpy.mock.calls;
    const lastLogCall = logCalls[logCalls.length - 1][0];

    expect(lastLogCall).toContain("최종 우승자 : pobi");
  });

  test.each([
    [["pobi,javaji"]],
    [["pobi,eastjun"]],
    [[""]],
    [["abc,bbcdddda"]],
    [["abcaddda, abcdc"]],
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
