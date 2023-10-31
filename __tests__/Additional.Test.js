import { MissionUtils } from "@woowacourse/mission-utils";
import Game from "../src/Race/Game.js";
import Car from "../src/Race/Car.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("New test suites for README #9", () => {
  test("New cars are created just as the number of the inputs", async () => {
    // given
    const inputs = ["Tesla,BYD"];
    mockQuestions(inputs);

    // when
    const game = new Game();
    const array = await game.entry(inputs[0]);
    game.createCars(array);

    // then
    expect(game.cars.length).toBe(inputs[0].split(",").length);
    game.cars.forEach((car) => {
      expect(car).toBeInstanceOf(Car);
    });
  });

  test.each([["Tesla"], ["Tesla,BYD"]])(
    "Printing out a winner/winners appropriately for each case",
    async (inputs) => {
      const LAPS = 3;
      const winnerString = [
        ["최종 우승자 : Tesla"],
        ["최종 우승자 : Tesla, BYD"],
      ];
      const mockRace = () => {
        game.startRace = jest.fn();
        game.startRace.mockImplementation(() => {
          game.cars.forEach((car) => {
            car.distance = 3;
          });
          game.whoDidWin(LAPS);
        });
      };

      const game = new Game();
      const logspy = getLogSpy();
      mockQuestions([inputs]);
      mockRace();
      await game.init();

      const string = winnerString.shift();
      string.forEach((string) => {
        expect(logspy).toBeCalledWith(expect.stringMatching(string));
      });
    }
  );
});
