import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "./constants/index.js";

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

      this.moveForward(carsArray, tryCount);

      // return cars;
    } catch (error) {
      throw error;
    }
  }

  moveForward(carsArray, tryCount) {
    this.tryCount = tryCount;
    this.carsArray = carsArray;
    const randomValue = Random.pickNumberInRange(0, 9)
    let countForward = []
    Console.print(GAME_MESSAGE.RESULT);

    for (let i = 1; i <= this.tryCount; i++) {
      this.carsArray.map((car) => {
        if (randomValue > 4) {
          countForward.push('-')
        }
        Console.print(`${car} : ${countForward.join("")}`);
      });
      // countForward = []
      Console.print("\n");
    }
  }

}

export default RacingcarGame;
