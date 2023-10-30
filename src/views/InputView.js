import { Console } from '@woowacourse/mission-utils';
import { InputValidator } from '../models/InputValidator';
import { throwError } from '../utils/throwError';
import { MESSAGES } from '../constants/messages';

class InputView {
  async getCarName() {
    const carsNameInput = await Console.readLineAsync(MESSAGES.getCarName);
    const carNames = carsNameInput.split(',');

    carNames.forEach((carName) => {
      if (!InputValidator.isValidCarName(carName))
        throwError(`유효하지 않은 입력입니다: ${carName}`);
    });

    return carNames;
  }

  async getAttemptNum(msg) {
    const attemptNum = await Console.readLineAsync(msg);
    return attemptNum;
  }
}

export default InputView;
