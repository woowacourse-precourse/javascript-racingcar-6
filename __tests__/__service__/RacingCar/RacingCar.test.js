import { MissionUtils } from "@woowacourse/mission-utils";
import { NormalRacingRule } from "../../../src/domain";
import { RacingCarGame } from "../../../src/service";

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

describe("RacingCar 테스트", () => {
  test("create game 테스트", () => {
    const rule = new NormalRacingRule();
    const game = RacingCarGame.createGame(rule);

    expect(game).toBeInstanceOf(RacingCarGame);
  });

  describe("promptCarNames 테스트", () => {
    test("all correct case 테스트", async () => {
      const rule = new NormalRacingRule();
      const game = RacingCarGame.createGame(rule);

      const inputs = ["pobi,woni"];

      mockQuestions(inputs);

      await game.promptCarNames();
    });

    test.each([[["pob232,woni"]], [[",woni,sean"]], [["fewfwef,wefwfww"]]])(
      "all incorrect case 테스트",
      async (inputs) => {
        const rule = new NormalRacingRule();
        const game = RacingCarGame.createGame(rule);

        mockQuestions(inputs);

        await expect(game.promptCarNames()).rejects.toThrow("[ERROR]");
      }
    );
  });

  describe("promptTotalRounds 테스트", () => {
    test("all correct case 테스트", async () => {
      const rule = new NormalRacingRule();
      const game = RacingCarGame.createGame(rule);

      const inputs = [5];

      mockQuestions(inputs);

      await game.promptTotalRounds();
    });

    test.each([[["hello"]], [[0.1]], [[-1]], [[""]]])(
      "incorrect case 테스트",
      async (inputs) => {
        const rule = new NormalRacingRule();
        const game = RacingCarGame.createGame(rule);

        mockQuestions(inputs);

        await expect(game.promptTotalRounds()).rejects.toThrow("[ERROR]");
      }
    );
  });

  test("startRacing 테스트", async () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni,ynnss", 3];
    const outputs = [
      "실행 결과",
      "pobi : -\nwoni : -\nynnss : ",
      "pobi : -\nwoni : -\nynnss : -",
      "pobi : --\nwoni : -\nynnss : --",
    ];
    const randoms = [
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP, // 1라운드
      STOP,
      STOP,
      MOVING_FORWARD, // 2라운드
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD, // 3라운드
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    const rule = new NormalRacingRule();
    const game = RacingCarGame.createGame(rule);

    await game.promptCarNames();
    await game.promptTotalRounds();
    game.startRacing();

    outputs.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });
});
