import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';
import Validator from './Validator.js';
import RacingCars from './RacingCars.js';

class RacingCarGame {
  #racingCars;

  async startGame() {
    const carNameList = await this.#getCarNamesInput();
    const attemptsCount = await this.#getAttemptsInput();

    this.#racingCars = new RacingCars(carNameList);
    this.#repeatMovement(attemptsCount);

    Console.print(this.#makeFinalWinnerString());
  }

  #repeatMovement(attemptsCount) {
    Console.print(`\n${MESSAGE.executeResult}`);

    for (let i = 0; i < attemptsCount; i += 1) {
      const movingLog = this.#racingCars.getRacingCarsMovingLog();
      Console.print(`${movingLog}\n`);
    }
  }

  async #getCarNamesInput() {
    const carNames = await Console.readLineAsync(MESSAGE.enterCarNames);
    const splitCarNames = carNames.trim().split(',');
    this.#validateCarNamesInput(splitCarNames);

    return splitCarNames;
  }

  #validateCarNamesInput(carNameList) {
    Validator.checkHasEmpty(carNameList);
    Validator.checkHasDuplicate(carNameList);
    Validator.checkIsLongerThanMaxLen(carNameList);
  }

  async #getAttemptsInput() {
    const attempt = await Console.readLineAsync(MESSAGE.enterNumbersOfAttempts);
    const numberAttempt = Number(attempt);
    this.#validateAttemptsInput(numberAttempt);

    return numberAttempt;
  }

  #validateAttemptsInput(attempt) {
    Validator.checkIsNotNumber(attempt);
    Validator.checkIsNotMoving(attempt);
  }

  #makeFinalWinnerString() {
    const finalWinners = this.#racingCars.getWinners();
    return `${MESSAGE.finalWinner} ${finalWinners.join(', ')}`;
  }
}

export default RacingCarGame;
