import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "./constants/index.js";
import Car from "./Car.js";
import Validation from "./Validation.js";

class RacingcarGame {
  async startGame() {
    try {
      const cars = await Console.readLineAsync(GAME_MESSAGE.START);
      const validation = new Validation();
      const carsArray = validation.validate(cars);

      const tryCount = await Console.readLineAsync(GAME_MESSAGE.TRY_COUNT);
      if (isNaN(tryCount)) throw new Error(ERROR_MESSAGE.IS_NUMBER);

      Console.print(GAME_MESSAGE.RESULT);
      let countForward = {};
      let winner = [];
      let winnerValue = 0;

      for (let i = 0; i < tryCount; i++) {
        carsArray.map((car) => {
          const racingCar = new Car(car);
          countForward = racingCar.moveForward(countForward);
        });
        Console.print("\n");
      }

      for (const car in countForward) {
        if (countForward[car].length > winnerValue) {
          winner = [car];
          winnerValue = countForward[car].length;
        } else if (countForward[car].length === winnerValue) {
          winner.push(car);
        }
      }

      Console.print(`${GAME_MESSAGE.WINNER}${winner.map((key) => key)}`);
    } catch (error) {
      throw error;
    }
  }
}

export default RacingcarGame;
