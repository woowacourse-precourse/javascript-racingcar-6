import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "./constants/index.js";
import Car from "./Car.js";

class RacingcarGame {
  validate(cars) {
    const carsArray = cars.split(",");
    if (!cars.includes(",")) throw new Error(ERROR_MESSAGE.IS_COMMA);
    carsArray.forEach((element) => {
      if (element.length > 5) throw new Error(ERROR_MESSAGE.IS_LENGTH);
    });
    return carsArray;
  }

  async inputValue() {
    try {
      const cars = await Console.readLineAsync(GAME_MESSAGE.START);
      const carsArray = this.validate(cars);
      const tryCount = await Console.readLineAsync(GAME_MESSAGE.TRY_COUNT);
      if (isNaN(tryCount)) {
        throw new Error(ERROR_MESSAGE.IS_NUMBER);
      }
      Console.print(GAME_MESSAGE.RESULT);

      for (let i = 0; i < tryCount; i++) {
        carsArray.map((car) => {
          const racingCar = new Car(car);
          racingCar.moveForward(tryCount);
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
