import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser.js';
import Validator from './Validator.js';
import InputError from '../errors/InputError.js';
import { QUERIES } from '../constants/index.js';

class Input {
  /** 자동차 이름을 입력받는 메소드
   * @returns {Promise<string[]>} 자동차 이름 배열
   */
  static async getCarNames() {
    const inputString = await Console.readLineAsync(QUERIES.CAR_NAME_INPUT_QUERY);

    const carNames = Parser.stringToArray(inputString);
    const { isValid, reason } = Validator.isValidCarName(carNames);

    if (!isValid) throw new InputError(reason);

    return carNames;
  }

  /** 시도할 횟수를 입력받는 메소드
   * @returns {Promise<number>} 시도할 횟수
   */
  static async getTrialCount() {
    const inputString = await Console.readLineAsync(QUERIES.TRIAL_COUNT_INPUT_QUERY);

    const trialCount = Parser.stringToNumber(inputString);
    const { isValid, reason } = Validator.isValidTrialCount(trialCount);

    if (!isValid) throw new InputError(reason);

    return trialCount;
  }
}

export default Input;
