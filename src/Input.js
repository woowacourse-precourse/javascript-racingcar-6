import { Console } from '@woowacourse/mission-utils';
import { MESSAGES, ERROR_MESSAGES } from './constants.js';
import InputError from './InputError.js';
class Input {
  static async inputCars() {
    const cars = await Console.readLineAsync(MESSAGES.inputCarsName);
    const carsArray = cars.split(',');
    Input.validateInputCar(carsArray);
    return carsArray;
  }

  static validateInputCar(carsArray) {
    if (carsArray.length <= 1) {
      throw new InputError(ERROR_MESSAGES.twoOrMore);
    }

    carsArray.forEach((car) => {
      if (car.length >= 5) {
        throw new InputError(ERROR_MESSAGES.tooLongTextName);
      }
    });
  }

  static async inputRound() {
    const round = await Console.readLineAsync(MESSAGES.inputRound);
    return Input.valiateRound(round);
  }

  static valiateRound(count) {
    const intNumber = parseInt(count, 10);
    if (intNumber <= 0) {
      throw new InputError(ERROR_MESSAGES.oneOrMore);
    }
    if (!Number.isSafeInteger(intNumber)) {
      throw new InputError(ERROR_MESSAGES.positiveInteger);
    }

    return intNumber;
  }
}

export default Input;
