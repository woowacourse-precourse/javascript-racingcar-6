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

  test("전진-정지, 참가 3, 우승 1", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 1;
    const inputs = [
      "pobi,woni,java", "4"
    ];
    const outputs = [
      "pobi : -","woni : -","java : -",
      "pobi : --","woni : -","java : --",
      "pobi : --","woni : -","java : ---",
      "pobi : --","woni : -","java : ----",
      "java"
    ];
    const randoms = [
      MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD,
      MOVING_FORWARD, STOP, MOVING_FORWARD, 
      STOP, STOP, MOVING_FORWARD,
      STOP, STOP, MOVING_FORWARD,
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

  test("전진-정지, 참가 1, 우승 1", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 1;
    const inputs = [
      "pobi", "2"
    ];
    const outputs = [
      "pobi : -","pobi : -",
      "pobi"
    ];
    const randoms = [
      MOVING_FORWARD, MOVING_FORWARD,
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

  test("전진-정지, 참가 4, 우승 3", async () => {
    // given
    const MOVING_FORWARD = 6;
    const STOP = 3;
    const inputs = [
      "pobi,woni,java,susu", "1"
    ];
    const outputs = [
      "pobi : -","woni : ","java : -","susu : -",
      "pobi, java, susu"
    ];
    const randoms = [
      MOVING_FORWARD, STOP, MOVING_FORWARD, MOVING_FORWARD,
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
    [['']],
    [['','','']],
    [[' ',' ',' ']],
    [['  ','  ','  ']],
    [["pobibi"]],
    [["pobi,wonini"]],
    [["pobi,woni,javava"]],
    [["pobi,woni,java,"]],
    [["pobi,woni,java,  "]],
    [["pobi,woni,java","number"]],
    [["po bi,woni,ja va","number"]],
  ])("입력 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

});
