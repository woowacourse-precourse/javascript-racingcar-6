import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants/Constant.js';
import Validator from './utils/Validator.js';
import RacingCars from './RacingCars.js';

class RacingCarGame {
  #racingCars;

  async startGame() {
    const carNameList = await this.#getCarNamesInput();
    const attemptCount = await this.#getAttemptInput();

    this.#racingCars = new RacingCars(carNameList);
    this.#repeatMovement(attemptCount);

    Console.print(this.#racingCars.getWinners());
  }

  #repeatMovement(attemptsCount) {
    Console.print(`\n${MESSAGE.executeResult}`);

    for (let i = 0; i < attemptsCount; i += 1) {
      const movingLog = this.#racingCars.getMovingLog();
      Console.print(`${movingLog}\n`);
    }
  }

  async #getCarNamesInput() {
    const carNames = await Console.readLineAsync(MESSAGE.enterCarNames);
    const splitCarNames = this.#makeSplitCarNames(carNames);
    this.#validateCarNamesInput(splitCarNames);

    return splitCarNames;
  }

  #makeSplitCarNames(carNames) {
    return Array.from(carNames.split(','), (carName) => carName.trim());
  }

  #validateCarNamesInput(carNameList) {
    Validator.checkHasEmpty(carNameList);
    Validator.checkHasDuplicate(carNameList);
    Validator.checkIsLongerThanMaxLen(carNameList);
  }

  async #getAttemptInput() {
    const attempt = await Console.readLineAsync(MESSAGE.enterNumbersOfAttempts);
    this.#validateAttemptInput(attempt);

    return Number(attempt);
  }

  #validateAttemptInput(attempt) {
    Validator.checkIsNotNumber(attempt);
    Validator.checkIsNotInteger(attempt);
    Validator.checkIsNegative(attempt);
    Validator.checkIsNotMoving(attempt);
  }
}

export default RacingCarGame;
