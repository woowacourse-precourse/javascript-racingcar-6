import RacingGame from "../src/game/RacingCar.js";
import OutputView from "../src/view/OutputView.js";

jest.mock("../src/view/OutputView.js");

describe("RacingGame", () => {
  let racingGame;

  beforeEach(() => {
    racingGame = new RacingGame();
  });

  describe("addCar", () => {
    test("유저 추가", () => {
      racingGame.addCar("pobi");
      racingGame.addCar("woni");
      racingGame.addCar("jun");
      expect(racingGame.cars).toHaveLength(3);
    });
  });

  describe('startGame', () => {
    test('startGame : 지정된 횟수만큼 게임을 진행', async () => {
      racingGame.addCar('pobi');
      racingGame.addCar('woni');
      racingGame.addCar('jun');

      racingGame.cars[0].position = 5;
      racingGame.cars[1].position = 4;
      racingGame.cars[2].position = 5;

      OutputView.printLine.mockImplementation((car, position) => {
        console.log(`${car.name} : ${position}`);
      });

      await racingGame.startGame(3);

      expect(OutputView.printLine).toHaveBeenCalledTimes(9);
    });
  });

  describe("getWinners", () => {
    test("getWinners : 게임에서 우승한 유저를 반환", () => {
      racingGame.addCar("pobi");
      racingGame.addCar("woni");
      racingGame.addCar("jun");

      racingGame.cars[0].position = 5;
      racingGame.cars[1].position = 4;
      racingGame.cars[2].position = 5;

      const winners = racingGame.getWinners();

      expect(winners).toEqual("pobi, jun");
    });
  });
});
