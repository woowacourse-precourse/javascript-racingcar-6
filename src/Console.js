import { MissionUtils } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class Console {
  static #DELIMITER = ',';
  static #CAR_NAMES_QUERY = `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) `;
  static #NUMBER_OF_ROUNDS_QUERY = '시도할 횟수는 몇 회인가요? ';
  static #RESULT = '실행 결과';
  static #FORWARD_MARK = '-';

  static async askCarNames() {
    const answer = await MissionUtils.Console.readLineAsync(
      this.#CAR_NAMES_QUERY,
    );
    const stringWithoutSpaces = answer.replace(/ /g, '');
    const array = stringWithoutSpaces.split(this.#DELIMITER);
    Validator.validateCarNames(array);
    return array;
  }

  static async askNumberOfRounds() {
    const answer = await MissionUtils.Console.readLineAsync(
      this.#NUMBER_OF_ROUNDS_QUERY,
    );
    const number = Number(answer);
    Validator.validateNumberOfRound(number);
    return number;
  }

  static writeResultMessage(results) {
    let message = `\n${this.#RESULT}\n`;
    results.forEach((result) => {
      result.forEach((moveCount, name) => {
        message += `${name} : ${this.#FORWARD_MARK.repeat(moveCount)}\n`;
      });
      message += '\n';
    });
    return message;
  }

  static printResults(results) {
    const message = this.writeResultMessage(results);
    MissionUtils.Console.print(message);
  }
}

export default Console;
