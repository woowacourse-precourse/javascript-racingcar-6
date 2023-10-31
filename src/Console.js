import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class Console {
  static #DELIMITER = ',';
  static #CAR_NAMES_QUERY = `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) `;
  static #ATTEMPT_COUNT_QUERY = '시도할 횟수는 몇 회인가요? ';

  static async askCarNames() {
    const answer = await MissionUtils.Console.readLineAsync(
      this.#CAR_NAMES_QUERY,
    );
    const stringWithoutSpaces = answer.replace(/ /g, '');
    const array = stringWithoutSpaces.split(this.#DELIMITER);
    Validator.validateCarNames(array);
    return array;
  }

  static async askAttemptCount() {
    const answer = await MissionUtils.Console.readLineAsync(
      this.#ATTEMPT_COUNT_QUERY,
    );
    const number = Number(answer);
    return number;
  }
}

export default Console;
