import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class View {
  static #DELIMITER = ',';
  static #CAR_NAMES_QUERY = `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) `;
  static #NUMBER_OF_ROUNDS_QUERY = '시도할 횟수는 몇 회인가요? ';
  static #RESULT = '실행 결과';
  static #FORWARD_MARK = '-';
  static #WINNER = '최종 우승자';

  static async askCarNames() {
    const answer = await Console.readLineAsync(View.#CAR_NAMES_QUERY);
    const stringWithoutSpaces = answer.replace(/ /g, '');
    const array = stringWithoutSpaces.split(View.#DELIMITER);
    Validator.validateCarNames(array);
    return array;
  }

  static async askNumberOfRounds() {
    const answer = await Console.readLineAsync(View.#NUMBER_OF_ROUNDS_QUERY);
    const number = Number(answer);
    Validator.validateNumberOfRound(number);
    return number;
  }

  static writeResultMessage(results) {
    let message = `\n${View.#RESULT}\n`;
    results.forEach((result) => {
      result.forEach((moveCount, name) => {
        message += `${name} : ${View.#FORWARD_MARK.repeat(moveCount)}\n`;
      });
      message += '\n';
    });
    return message;
  }

  static printResults(results) {
    const message = View.writeResultMessage(results);
    Console.print(message);
  }

  static writeWinnerMessage(winners) {
    return `${View.#WINNER} : ${winners.join(`${View.#DELIMITER} `)}`;
  }

  static printWinners(winners) {
    const message = View.writeWinnerMessage(winners);
    Console.print(message);
  }
}

export default View;
