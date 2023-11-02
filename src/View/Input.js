import { Console } from '@woowacourse/mission-utils';
import CarNameValidator from '../Validator/CarNameValidator.js';
import tryNumValidator from '../Validator/TryNumValidator.js';

class Input {
  /**
   * 입력받은 자동차 이름의 string 배열 타입
   * @returns {[string]}
   */
  static async inputCarNames() {
    const carNamesInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const validatedCarNames = CarNameValidator.carNameValidator(carNamesInput);

    return validatedCarNames;
  }

  /**
   * 시도 횟수의 number 타입
   * @returns {number}
   */
  static async inputTryNum() {
    const tryNumInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );
    const validatedTryNum = tryNumValidator.tryNumValidator(tryNumInput);

    return validatedTryNum;
  }
}

export default Input;
