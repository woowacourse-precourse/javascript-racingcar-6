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
  it("create game 테스트", () => {
    const rule = new NormalRacingRule();
    const game = RacingCarGame.createGame(rule);

    expect(game).toBeInstanceOf(RacingCarGame);
  });

  describe("promptCarNames 테스트", () => {
    it("all correct case 테스트", async () => {
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
    it("all correct case 테스트", async () => {
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
});
