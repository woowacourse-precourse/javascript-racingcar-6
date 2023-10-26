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

    return splitCarNames;
  }
}

export default RacingCarGame;
