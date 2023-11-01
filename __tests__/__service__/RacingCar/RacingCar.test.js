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
  let rule;
  let game;
  let logSpy;

  beforeEach(() => {
    rule = new NormalRacingRule();
    game = RacingCarGame.createGame(rule);
    logSpy = getLogSpy();
  });

  const setUpGameWithInputs = async (carNames, totalRounds) => {
    mockQuestions([carNames, totalRounds]);
    await game.promptCarNames();
    await game.promptTotalRounds();
  };

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

  describe("Racing 결과와 우승자 출력 테스트", () => {
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni,ynnss", 3];
    const outputsForRacing = [
      "실행 결과",
      "pobi : -\nwoni : -\nynnss : ",
      "pobi : -\nwoni : -\nynnss : -",
      "pobi : --\nwoni : -\nynnss : --",
    ];
    const outputForWinner = "최종 우승자 : pobi, ynnss";
    const randoms = [
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
    ];

    beforeEach(async () => {
      mockRandoms(randoms);
      await setUpGameWithInputs(...inputs);
      game.startRacing();
    });

    test("startRacing 테스트", () => {
      outputsForRacing.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
      });
    });

    test("printWinnerNames 테스트", () => {
      game.printWinnerNames();
      expect(logSpy.mock.calls[logSpy.mock.calls.length - 1][0]).toContain(
        outputForWinner
      );
    });
  });
});
