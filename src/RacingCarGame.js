import IOManager from './IOManager.js';
import GameUtils from './GameUtils.js';

import MESSAGE from './message.js';
import ERROR_MESSAGE from './errorMessage.js';

import Car from './Car.js';

class RacingCarGame {
  static #MESSAGE = MESSAGE;
  static #ERROR_MESSAGE = ERROR_MESSAGE;

  async getCarNames() {
    const carNames = await IOManager.input(
      RacingCarGame.#MESSAGE.GET_CAR_NAMES
    );
    this.#validateCarNames(carNames);
    return carNames;
  }

  #validateCarNames(carNames) {
    if (carNames === '') {
      throw new Error(RacingCarGame.#ERROR_MESSAGE.EMPTY_INPUT);
    }

    const carNameList = carNames.split(',');

    carNameList.forEach((carName) => {
      if (carName.trim().length === 0) {
        throw new Error(RacingCarGame.#ERROR_MESSAGE.INVALID_CAR_NAME);
      }

      if (carName.trim().length > 5) {
        throw new Error(RacingCarGame.#ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
      }
    });
  }

  createCarObjectsFromNames(carNames) {
    const carNameList = carNames.split(',');
    return carNameList.map((carName) => new Car(carName.trim()));
  }

  async getTryCount() {
    const tryCount = await IOManager.input(
      RacingCarGame.#MESSAGE.GET_TRY_COUNT
    );
    this.#validateTryCount(tryCount);
    return parseInt(tryCount);
  }

  #validateTryCount(tryCount) {
    if (tryCount === '') {
      throw new Error(RacingCarGame.#ERROR_MESSAGE.EMPTY_INPUT);
    }

    if (isNaN(tryCount)) {
      throw new Error(RacingCarGame.#ERROR_MESSAGE.INVALID_TRY_COUNT);
    }

    if (parseInt(tryCount) < 1) {
      throw new Error(RacingCarGame.#ERROR_MESSAGE.INVALID_TRY_COUNT_RANGE);
    }
  }

  repeatMove(cars, tryCount) {
    IOManager.output(RacingCarGame.#MESSAGE.RESULT);
    for (let i = 0; i < tryCount; i++) {
      GameUtils.forEachApply(cars, this.#decideToMove);
      GameUtils.forEachApply(cars, this.#displayCurrentProgress);
      IOManager.output(RacingCarGame.#MESSAGE.NEW_LINE);
    }
  }

  #decideToMove(car) {
    const randomNumber = GameUtils.getRandomNumberInRange(0, 9);

    if (randomNumber >= 4) {
      car.move(1);
    }
  }

  #displayCurrentProgress(car) {
    IOManager.output(
      RacingCarGame.#MESSAGE.DISPLAY_CURRENT_PROGRESS(car.name, car.step)
    );
  }

  getWinners(cars) {
    const maxStep = cars.reduce((maxStep, car) => {
      return Math.max(maxStep, car.step);
    }, 0);

    return cars.filter((car) => car.step === maxStep);
  }

  displayResult(winners) {
    const winnerNames = winners.map((winner) => winner.name).join(', ');
    IOManager.output(RacingCarGame.#MESSAGE.WINNER_ANNOUNCEMENT(winnerNames));
  }
}

export default RacingCarGame;
