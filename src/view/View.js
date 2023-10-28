import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/constants';
import Validation from './validation';

export default class View {
  static async readCarNames() {
    const carNames = await Console.readLineAsync(MESSAGE.input);
    const carNamesToArray = carNames.split(',');

    Validation.hasSpace(carNamesToArray);
    Validation.hasSpecialChar(carNamesToArray);
    Validation.hasEmptyName(carNamesToArray);
    Validation.hasDuplicateName(carNamesToArray);
    Validation.isMoreThanFiveLetters(carNamesToArray);

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
