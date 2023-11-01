/* eslint-disable import/extensions */
import { Console } from '@woowacourse/mission-utils';
import { COMPUTER_MESSAGES, ERROR_MESSAGE } from './Constants.js';
import VALIDATION from './Validation.js';

export default class Settings {
  constructor() {
    this.INPUT_CAR = '';
    this.CAR_NAME = '';
    this.INPUT_NUM = '';
    this.TRY_NUM = '';
  }

  async inputCarName() {
    try {
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
        throw ERROR_MESSAGE.NOTHING_INPUT;
      }
      if (VALIDATION.isSpacing(this.CAR_NAME)) {
        throw ERROR_MESSAGE.SPACING_NAME;
      }
    } catch (error) {
      throw new Error(error);
    }
    return this.CAR_NAME;
  }

  async inputTry() {
    try {
      this.INPUT_NUM = await Console.readLineAsync(COMPUTER_MESSAGES.TRY);
      if (VALIDATION.isNum(this.INPUT_NUM)) {
        throw ERROR_MESSAGE.NOT_NUMBER;
      }
    } catch (error) {
      // inputTry()에서 발생한 에러 처리
      throw new Error(error);
    }
    return this.INPUT_NUM;
  }
}
