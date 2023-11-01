import { Console } from '@woowacourse/mission-utils';
import MESSAGE from './Constant.js';

export default class User {
  static MAX_NAME_LEGNTH = 5;

  static async getCarNameArray() {
    const input = await Console.readLineAsync(MESSAGE.COMMAND_INPUT_CAR_NAME);
    const carNameArr = input.split(',').map((name) => name.trim());

    if (carNameArr.some((carName) => carName.length > User.MAX_NAME_LEGNTH || carName === ''))
      throw new Error(MESSAGE.ERROR_WRONG_INPUT);
    if (carNameArr.length !== new Set([...carNameArr]).size)
      throw new Error(MESSAGE.ERROR_WRONG_INPUT);

    return carNameArr;
  }

  static async getTrialNumber() {
    const input = await Console.readLineAsync(MESSAGE.COMMAND_INPUT_TRIAL_NUMBER);

    if (Number.isNaN(Number(input))) throw new Error(MESSAGE.ERROR_WRONG_INPUT);
    if (Number(input) <= 0) throw new Error(MESSAGE.ERROR_WRONG_INPUT);

    return Number(input);
  }
}
