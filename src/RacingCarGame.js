import { Console } from '@woowacourse/mission-utils';
import { ERROR, MESSAGE } from './Constant.js';
import Validator from './Validator.js';

class RacingCarGame {
  async startGame() {
    const carNameList = await this.#getCarNamesInput();
    const numOfAttempts = await Console.readLineAsync(MESSAGE.enterNumbersOfAttempts);
  }

  async #getCarNamesInput() {
    const carNames = await Console.readLineAsync(MESSAGE.enterCarNames);
    const splitCarNames = carNames.split(',');
    this.#validateCarNameInput(splitCarNames);

    return splitCarNames;
  }

  #validateCarNameInput(carNameList) {
    if (!Validator.checkHasDuplicate(carNameList)) {
      throw new Error(ERROR.hasDuplicate);
    }
    if (Validator.checkIsExceedMaxNum(carNameList)) {
      throw new Error(ERROR.exceedMaxNum);
    }
  }
}

export default RacingCarGame;
