import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import { validateInputCar } from './utills.js';
class Input {
  static async inputCars() {
    const input = await Console.readLineAsync(MESSAGES.inputCarsName);
    const splittedString = input.split(',');
    validateInputCar(splittedString);
    return splittedString;
  }
}

export default Input;
