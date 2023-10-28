import { Console } from '@woowacourse/mission-utils';
import Parser from './Parser';
import Validator from './Validator';
import InputError from '../errors/InputError';

class Input {
  #carNameInputQuery = '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n';

  /** 자동차 이름을 입력받는 메소드
   * @returns {Promise<string[]>} 자동차 이름 배열
   */
  async getCarNames() {
    const inputString = await Console.readLineAsync(this.#carNameInputQuery);

    const carNames = Parser.stringToArray(inputString);
    const { isValid, reason } = Validator.isValidCarName(carNames);

    if (!isValid) throw new InputError(reason);

    return carNames;
  }
}

export default Input;
