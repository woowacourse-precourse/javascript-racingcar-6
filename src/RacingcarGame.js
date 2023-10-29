import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "./constants/index.js";

class RacingcarGame {
  validate(cars) {
    const carsArray = cars.split(",");
    carsArray.forEach((element) => {
      if (element.length > 5) throw new Error(ERROR_MESSAGE.IS_LENGTH);
    });
    if (!cars.includes(",")) throw new Error(ERROR_MESSAGE.IS_COMMA);
    if (typeof cars === "string") throw new Error(ERROR_MESSAGE.IS_STRING);
    return carsArray;
  }

  async inputValue() {
    try {
      const cars = await Console.readLineAsync(GAME_MESSAGE.START);
      this.validate(cars);
      const tryCount = await Console.readLineAsync(GAME_MESSAGE.TRY_COUNT);
      if (isNaN(tryCount)) {
        throw new Error(ERROR_MESSAGE.IS_NUMBER);
      }
      return cars;
    } catch (error) {
      throw error;
    }
  }
}

export default RacingcarGame;
