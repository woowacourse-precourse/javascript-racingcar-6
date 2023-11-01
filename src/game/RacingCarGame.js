import Garage from './Garage.js';
import { print, readLineAsync } from '../utility/console.js';
import { MESSAGE, ERROR_MESSAGE } from '../constant/message.js';
import {
    splitStringByComma,
    joinArrayWithCommaAndBlank,
  } from '../utility/string.js';

class RacingCarGame {
  #gameCount = 0;

  #nameList = [];
  
  #nameListString = '';

  async #getNameString() {
    this.#nameListString = await readLineAsync(MESSAGE.nameInputGuide);
  }

  async #getGameCount() {
    this.#gameCount = await readLineAsync(MESSAGE.countInputGuide);
  }

  #isMaxNameListLength() {
    if (this.#nameList.length > 1000) {
      throw new Error(ERROR_MESSAGE.wrongNameListLength);
    }
  }

  #isValidName() {
    const uniqueNameList = [];

    this.#nameList.forEach((name) => {
      isDuplicateString(name, uniqueNameList);
      isEmptyString(name, ERROR_MESSAGE.wrongNameInput);
      isLengthWithinBounds(name, 1, 5);

      uniqueNameList.push(name);
    });
  }

  #isValidGameCount() {
    isEmptyString(this.#gameCount, ERROR_MESSAGE.wrongGameCountInput);
    isValidateNumber(this.#gameCount);
    isNumberWithinBounds(parseInt(this.#gameCount, 10), 1, 70);
  }

  async gameStart() {
    await this.#getNameString();

    await this.#getGameCount();
  }
}

export default RacingCarGame;