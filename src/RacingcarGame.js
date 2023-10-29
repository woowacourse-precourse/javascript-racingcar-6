import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "./constants/index.js";

class RacingcarGame {
  async inputValue() {
    try {
      const cars = await Console.readLineAsync(GAME_MESSAGE.START);
      const tryCount = await Console.readLineAsync(GAME_MESSAGE.TRY_COUNT);
      const carsArray = cars.split(",");

      carsArray.push(tryCount);

      return carsArray;
    } catch (error) {
      throw new Error(ERROR_MESSAGE.IS_ERROR);
    }
  }
}

export default RacingcarGame;
