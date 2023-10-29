import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants.js';
import Validation from './Validation.js';

export default class View {
  static async readCarNames() {
    const carNames = await Console.readLineAsync(MESSAGE.input);
    const carNamesToArray = carNames.split(',');

    Validation.checkValidation(carNamesToArray);
    return carNamesToArray;
  }

  static async readRepeatTime() {
    const repeatTime = await Console.readLineAsync(MESSAGE.repeatTime);
    return parseInt(repeatTime, 10);
  }

  static print(message) {
    Console.print(message);
  }
}
