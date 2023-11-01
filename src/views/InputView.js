import { Console } from '@woowacourse/mission-utils';
import { InputValidator } from '../models/InputValidator.js';
import { throwError } from '../utils/throwError.js';
import { MESSAGES } from '../constants/messages.js';

/**
 * 사용자에게 입력 받을 때 View
 */
class InputView {
  /**
   * @returns {string[]} 자동차 이름이 담긴 배열
   */
  async getCarNames() {
    const carsNameInput = await Console.readLineAsync(MESSAGES.getCarName);

    const carNames = carsNameInput.split(',');
    this.validateCarNames(carNames);

    return carNames;
  }

  /**
   * @returns {number} 시도 횟수
   */
  async getAttemptNum() {
    const attemptNum = await Console.readLineAsync(MESSAGES.getAttemptNum);

    this.validateAttemptNum(attemptNum);

    return Number(attemptNum);
  }

  /**
   * @param {string[]} carNames
   */
  validateCarNames(carNames) {
    carNames.forEach((carName) => {
      if (!InputValidator.isValidCarName(carName))
        throwError(`유효하지 않은 입력입니다: ${carName}`);
    });
  }

  /**
   * @param {string} attemptNum
   */
  validateAttemptNum(attemptNum) {
    if (!InputValidator.isValidAttemptNum(attemptNum))
      throwError(`유효하지 않은 입력입니다: ${attemptNum}`);
  }
}

export default InputView;
