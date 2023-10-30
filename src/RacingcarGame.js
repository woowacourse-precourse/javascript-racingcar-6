import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "./constants/index.js";
import Car from "./Car.js";
import Validation from "./Validation.js";

class RacingcarGame {
  async inputValue() {
    try {
      const cars = await Console.readLineAsync(GAME_MESSAGE.START);
      const validation = new Validation();
      const carsArray = validation.validate(cars);
      const tryCount = await Console.readLineAsync(GAME_MESSAGE.TRY_COUNT);
      if (isNaN(tryCount)) {
        throw new Error(ERROR_MESSAGE.IS_NUMBER);
      }
      Console.print(GAME_MESSAGE.RESULT);

      for (let i = 0; i < tryCount; i++) {
        carsArray.map((car) => {
          const racingCar = new Car(car);
          let countForward = racingCar.moveForward();
          Console.print(`${car} : ${countForward.join("")}`);
        });
        Console.print("\n");
      }

      // return cars;
    } catch (error) {
      throw error;
    }
  }
}

export default RacingcarGame;
