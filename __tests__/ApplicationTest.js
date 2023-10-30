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
    [["pobi,eastjun"]]
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  // TEST CASE
  test("전진-정지", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "2"];
    const outputs = ["pobi : -","woni : -","pobi : -","woni : -","pobi, woni"];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD,MOVING_FORWARD, MOVING_FORWARD,];
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

  test("공동 우승 TEST", async () => {
    // given
    const inputs = ["pobi,woni,jun", "5"];
    const outputs = [
      "pobi,woni,jun",
      "pobi : -","woni : ","jun : -",
      "pobi : --","woni : -","jun : --",
      "pobi : ---","woni : --","jun : ---",
      "pobi : ----","woni : ---","jun : ----",
      "pobi : -----","woni : ----","jun : -----",
      "pobi, jun",
    ];
    const randoms = [
      4, 1, 4,
      9, 9, 9,
      5, 5, 5,
      6, 6, 6,
      7, 7, 7
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

  test("공동 우승 TEST", async () => {
    // given
    const inputs = ["pobi,woni,jun,jong", "5"];
    const outputs = [
      "pobi,woni,jun,jong",
      "pobi : -","woni : ","jun : -","jong : -",
      "pobi : --","woni : -","jun : --","jong : --",
      "pobi : ---","woni : --","jun : ---","jong : ---",
      "pobi : ----","woni : ---","jun : ----","jong : ----",
      "pobi : -----","woni : ----","jun : -----","jong : -----",
      "pobi, jun, jong",
    ];
    const randoms = [
      4, 1, 4, 4,
      9, 9, 9, 8,
      5, 5, 5, 9,
      6, 6, 6, 9,
      7, 7, 7, 9,
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

  test("공동 우승 TEST", async () => {
    // given
    const inputs = ["pobi,woni,jun,jong", "5"];
    const outputs = [
      "pobi,woni,jun,jong",
      "pobi : -","woni : ","jun : -","jong : -",
      "pobi : --","woni : -","jun : --","jong : --",
      "pobi : ---","woni : --","jun : ---","jong : ---",
      "pobi : ----","woni : ---","jun : ----","jong : ----",
      "pobi : -----","woni : ----","jun : -----","jong : -----",
      "pobi, jun, jong",
    ];
    const randoms = [
      4, 1, 4, 4,
      9, 9, 9, 8,
      5, 5, 5, 9,
      6, 6, 6, 9,
      7, 7, 7, 9,
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

  test("공동 우승 TEST", async () => {
    // given
    const inputs = ["pobi,woni,jun,jong", "5"];
    const outputs = [
      "pobi,woni,jun,jong",
      "pobi : ","woni : ","jun : ","jong : -",
      "pobi : -","woni : ","jun : ","jong : -",
      "pobi : -","woni : -","jun : -","jong : -",
      "pobi : -","woni : --","jun : --","jong : --",
      "pobi : -","woni : ---","jun : ---","jong : --",
      "woni, jun",
    ];
    const randoms = [
      2, 1, 2, 4,
      4, 1, 1, 2,
      2, 5, 5, 2,
      3, 6, 6, 9,
      1, 7, 7, 1,
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

  test("공동 우승 TEST", async () => {
    // given
    const inputs = ["pobi,woni,jun,jong", "1"];
    const outputs = [
      "pobi,woni,jun,jong",
    ];
    const randoms = [
      2, 1, 2, 2,
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

  // ERROR 테스트케이스
  test.each([
    [["pobijavaji"]],
    [["pobi,eastjun"]],
    [['','','']],
    [['     ','     ','     ']],
    [["pobi,jun","@"]],
    [["pobi,jun,jong","a"]],
    [["pobi,ju  n,jong","a"]],
    [["@,!,#","a"]],
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test.each([
    [["pobi!,jun"]],
    [["pobi,jun,jun"]],
    [[""]],
    [[" , "]],
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test.each([
    [["pobi,jun","0"]],
    [["pobi,pobi","@"]],
    [["pobi,pobi1","  "]],
    [["pobi,jun","-1"]],
  ])("시도횟수에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });
});
