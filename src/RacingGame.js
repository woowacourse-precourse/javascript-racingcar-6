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

  async getMoveCount() {
    try {
      const count = await Console.readLineAsync(
        CONSOLE_MESSAGE.ENTER_MOVE_COUNT
      );

      if (this.isValidMoveCount(count)) {
        this.#moveCount = Number(count);
      }
    } catch (e) {
      throw e;
    }
  }

  isValidMoveCount(count) {
    if (!REGEX.POSITIVE_INTEGER.test(count)) {
      throw new Error(ERROR.printError(ERROR.INVALID_INPUT_NUMBER));
    }

    return true;
  }

  moveCars() {
    Console.print(CONSOLE_MESSAGE.PRINT_RESULT);

    for (let i = 0; i < this.#moveCount; i++) {
      for (const car of this.#cars) {
        car.move();
      }
      this.printRaceProgress();
    }

    Console.print(CONSOLE_MESSAGE.PRINT_BLANK);
  }

  printRaceProgress() {
    for (const car of this.#cars) {
      car.printCurDistance();
    }
  }

  findWinners() {
    const totalDistances = this.#cars.map((car) => car.getTotalDistance());
    const maxDistnace = Math.max(...totalDistances);
    const winners = this.#cars
      .filter((car) => car.getTotalDistance() == maxDistnace)
      .map((car) => car.getCarName());
    this.#winners = winners;
    this.printWinners();
  }

  printWinners() {
    const winners = this.#winners.join(', ');
    const consoleMessage = `${CONSOLE_MESSAGE.PRINT_WINNER} : ${winners}`;
    Console.print(consoleMessage);
  }
}

export default RacingGame;
