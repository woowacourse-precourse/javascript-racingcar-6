import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import CarRacingGame from "../src/CarRacingGame";

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
    [[""]],
    [["pobi"]]
  ])("이름에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수 입력", async () => {
    // given
    const input = ['3'];

    mockQuestions(input);

    // when
    const game = new CarRacingGame();
    const attempt = await game.getNumberOfAttempts();

    // then
    expect(attempt).toEqual('3');

  })

  test.each([
    [['h']],
    [['0']],
    [['-3']],
    [['0.3']]
  ])("시도 횟수에 대한 예외 처리", async (inputs) => {
    // given
    mockQuestions(inputs);

    // when
    const game = new CarRacingGame();
    
    // then
    await expect(() => game.getNumberOfAttempts()).rejects.toThrow("[ERROR]");
  });

  test("단독 우승자 출력 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const outputs = ["pobi"];
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
  })

  const MOVING_FORWARD = 4;

  test.each([
    [["pobi,woni", "1"], ["pobi,woni"], [MOVING_FORWARD, MOVING_FORWARD]],
    [["pobi,woni,youj", "1"], ["pobi,woni,youj"], [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD]]
  ])("공동 우승자 출력 테스트", async (inputs, outputs, randoms) => {
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
  
});
