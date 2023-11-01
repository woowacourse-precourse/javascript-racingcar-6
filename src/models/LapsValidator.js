import { ERROR_MESSAGES } from '../constants/messages.js';
import OPTIONS from '../constants/options.js';
import REGEXS from '../constants/regexs.js';
import InputError from '../errors/InputError.js';

class LapsValidator {
  #laps = OPTIONS.defaultPoint;

  /**
   * 입력받은 시도 횟수(laps)가 1 미만인지 판별
   * @returns {boolean}
   */
  #isInvalidNumberRange() {
    return this.#laps < OPTIONS.minLaps;
  }

  /**
   * 입력받은 시도 횟수(laps)의 타입이 숫자가 아닌지 판별
   * @returns {boolean}
   */
  #isInvalidType() {
    return !REGEXS.rPositiveInt.test(this.#laps);
  }

  /**
   * 입력받은 시도 횟수(laps)의 유효성 판별
   * @param {number} laps
   */
  isValid(laps) {
    this.#laps = laps;

    if (this.#isInvalidNumberRange())
      throw new InputError(ERROR_MESSAGES.positive);

    if (this.#isInvalidType()) throw new InputError(ERROR_MESSAGES.integer);
  }
}

export default LapsValidator;
