import { Console } from '@woowacourse/mission-utils';
import { ERROR, MESSAGE } from './Constant.js';
import Validator from './Validator.js';
import RacingCars from './RacingCars.js';

class RacingCarGame {
  #racingCars;

  async startGame() {
    const carNameList = await this.#getCarNamesInput();
    const numOfAttempts = await this.#getNumOfAttempts();

    this.#racingCars = new RacingCars(carNameList);
    this.#repeatMovement(numOfAttempts);
    Console.print(this.#makeFinalWinnerString());
  }

  #repeatMovement(numOfAttempts) {
    Console.print(`\n${MESSAGE.executeResult}`);

    for (let i = 0; i < numOfAttempts; i += 1) {
      const movingLog = this.#racingCars.getRacingCarsMovingLog();
      Console.print(`${movingLog}\n`);
    }
  }

  async #getCarNamesInput() {
    const carNames = await Console.readLineAsync(MESSAGE.enterCarNames);
    const splitCarNames = carNames.split(',');
    this.#validateCarNamesInput(splitCarNames);

    return splitCarNames;
  }

  #validateCarNamesInput(carNameList) {
    if (!Validator.checkHasDuplicate(carNameList)) {
      throw new Error(ERROR.hasDuplicate);
    }
    if (Validator.checkIsExceedMaxNum(carNameList)) {
      throw new Error(ERROR.exceedMaxNum);
    }
  }

  async #getNumOfAttempts() {
    const attempt = await Console.readLineAsync(MESSAGE.enterNumbersOfAttempts);
    const numberAttempt = Number(attempt);
    this.#validateAttemptsInput(numberAttempt);
    return numberAttempt;
  }

  #validateAttemptsInput(attempt) {
    if (!Validator.checkIsNumber(attempt)) {
      throw new Error(ERROR.isNotANumber);
    }
    if (Validator.checkIsNotMove(attempt)) {
      throw new Error(ERROR.notMoving);
    }
  }
}

export default RacingCarGame;
