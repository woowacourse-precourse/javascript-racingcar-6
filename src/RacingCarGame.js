import Car from './Car.js';
import GameUtils from './GameUtils.js';
import IOManager from './IOManager.js';

import ERROR_MESSAGE from './errorMessage.js';
import MESSAGE from './message.js';

class RacingCarGame {
  #cars;

  static #MESSAGE = MESSAGE;
  static #ERROR_MESSAGE = ERROR_MESSAGE;

  constructor() {
    this.#cars = [];
  }

  async #getCarNames() {
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

  #createCarObjectsFromNames(carNames) {
    const carNameList = carNames.split(',');

    carNameList.forEach((carName) => {
      this.#cars.push(new Car(carName.trim()));
    });
  }

  async #getTryCount() {
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

  #getWinners() {
    const maxStep = this.#cars.reduce((maxStep, car) => {
      return Math.max(maxStep, car.step);
    }, 0);

    return this.#cars.filter((car) => car.name === maxStep);
  }

  #displayResult(winners) {
    const winnerNames = winners.map((winner) => winner.name).join(', ');
    IOManager.output(RacingCarGame.#MESSAGE.WINNER_ANNOUNCEMENT(winnerNames));
  }

  async start() {
    try {
      const carNames = await this.#getCarNames();
      this.#createCarObjectsFromNames(carNames);
      const tryCount = await this.#getTryCount();

      IOManager.output(RacingCarGame.#MESSAGE.RESULT);
      for (let i = 0; i < tryCount; i++) {
        this.#cars.forEach((car) => {
          this.#decideToMove(car);
          this.#displayCurrentProgress(car);
        });
        IOManager.output(RacingCarGame.#MESSAGE.NEW_LINE);
      }

      const winners = this.#getWinners();
      this.#displayResult(winners);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default RacingCarGame;
