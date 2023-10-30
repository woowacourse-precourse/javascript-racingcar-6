import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { Game } from "../src/Race/Game.js";
import { Car } from "../src/Race/Car.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();
  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("Car instance creation", () => {
  test("New cars are created just as the number of the inputs", async () => {
    // given
    const inputs = ["Tesla,Lucid"];
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
});
