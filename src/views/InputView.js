import { Console } from '@woowacourse/mission-utils';
import { InputValidator } from '../models/InputValidator.js';
import { throwError } from '../utils/throwError.js';
import { MESSAGES } from '../constants/messages.js';

class InputView {
  async getCarNames() {
    const carsNameInput = await Console.readLineAsync(MESSAGES.getCarName);
    const carNames = carsNameInput.split(',');

    carNames.forEach((carName) => {
      if (!InputValidator.isValidCarName(carName))
        throwError(`유효하지 않은 입력입니다: ${carName}`);
    });

    return carNames;
  }

  async getAttemptNum() {
    const attemptNum = await Console.readLineAsync(MESSAGES.getAttemptNum);

    if (!InputValidator.isValidAttemptNum(attemptNum))
      throwError(`유효하지 않은 입력입니다: ${attemptNum}`);

    return Number(attemptNum);
  }
}

export default InputView;
