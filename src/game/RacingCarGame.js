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

  #isValidName() {
    const uniqueNameList = [];

    this.#nameList.forEach((name) => {
      isDuplicateString(name, uniqueNameList);
      isEmptyString(name, ERROR_MESSAGE.wrongNameInput);
      isLengthWithinBounds(name, 1, 5);

      uniqueNameList.push(name);
    });
  }

  async gameStart() {
    await this.#getNameString();

    await this.#getGameCount();
  }
}

export default RacingCarGame;