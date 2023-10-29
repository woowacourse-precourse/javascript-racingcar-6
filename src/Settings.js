/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { COMPUTER_MESSAGES, ERROR_MESSAGE } from './Constants.js';
import VALIDATION from './Validation.js';

export default class Settings {
  constructor() {
    this.INPUT_CAR = '';
    this.CAR_NAME = '';
  }

  async inputCarName() {
    this.INPUT_CAR = await Console.readLineAsync(COMPUTER_MESSAGES.START);
    this.CAR_NAME = this.INPUT_CAR.split(',');
    // console.log(this.CAR_NAME.length);
    if (VALIDATION.nameOverFive(this.CAR_NAME)) {
      throw ERROR_MESSAGE.OVER_FIVE;
    }
    if (VALIDATION.isDuplicate(this.CAR_NAME)) {
      throw ERROR_MESSAGE.DUPLICATE_NAME;
    }
    //   console.log(VALIDATION.inputNothing(this.CAR_NAME));
    if (VALIDATION.inputNothing(this.CAR_NAME)) {
      throw ERROR_MESSAGE.NOTHING_NAME;
    }
    if (VALIDATION.isSpacing(this.CAR_NAME)) {
      throw ERROR_MESSAGE.SPACING_NAME;
    }
  }
}
