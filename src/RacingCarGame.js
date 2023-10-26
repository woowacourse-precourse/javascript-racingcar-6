import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './Constant.js';
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
      throw new Error();
    }
  }
}

export default RacingCarGame;
