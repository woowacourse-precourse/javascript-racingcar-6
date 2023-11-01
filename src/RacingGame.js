import { Random, Console } from '@woowacourse/mission-utils';
import Car from './Car';
import { ERROR, REGEX, CONSOLE_MESSAGE } from './constants/constants';

class RacingGame {
  #cars;
  #moveCount;
  #winners;

  constructor(cars = [], moveCount = 0, winners = []) {
    this.#cars = cars;
    this.#moveCount = moveCount;
    this.#winners = winners;
  }

  async getCarNames() {
    try {
      const input = await Console.readLineAsync(
        CONSOLE_MESSAGE.ENTER_CAR_NAMES
      );
      const separatedInput = input.match(REGEX.COMMA_SEPARATED) || [];

      if (separatedInput.length === 0) {
        throw new Error(ERROR.printError(ERROR.EMPTY_INPUT));
      }

      const carNames = [...separatedInput];

      for (const carName of carNames) {
        if (!this.hasDuplicateCarName(carName)) {
          const newCar = new Car(carName);
          this.#cars.push(newCar);
        }
      }

      return;
    } catch (e) {
      throw e;
    }
  }

  hasDuplicateCarName(carName) {
    if (this.#cars.some((car) => car.getCarName() === carName)) {
      throw new Error(ERROR.printError(ERROR.DUPLICATE_CAR_NAME));
    }

    return false;
  }
}

export default RacingGame;
