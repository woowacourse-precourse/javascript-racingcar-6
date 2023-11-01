import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';

class Input {
  static async inputCars() {
    const cars = await Console.readLineAsync(MESSAGES.inputCarsName);
    const carsArray = cars.split(',');
    Input.validateInputCar(carsArray);
    return carsArray;
  }

  static validateInputCar(carsArray) {
    if (carsArray.length <= 1) {
      throw new Error(
        '[ERROR] 쉼표로 구분되어 자동차명을 두대이상 작성해주세요.'
      );
    }

    carsArray.forEach((car) => {
      if (car.length >= 5) {
        throw new Error('[ERROR] 자동차명은 5글자미만입니다.');
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
      throw new Error('[ERROR] 횟수는 1이상 이여야합니다.');
    }
    if (!Number.isSafeInteger(intNumber)) {
      throw new Error('[ERROR] 양의 정수여야합니다.');
    }

    return intNumber;
  }
}

export default Input;
