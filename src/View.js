import { Console } from '@woowacourse/mission-utils';
import Validator from './Validator.js';

class View {
  static #DELIMITER = ',';
  static #CAR_NAMES_QUERY = `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) `;
  static #NUMBER_OF_ROUNDS_QUERY = '시도할 횟수는 몇 회인가요? ';
  static #TOTAL_RESULTS_HEAD = '실행 결과';
  static #FORWARD_MARK = '-';
  static #WINNERS_HEAD = '최종 우승자';

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

  static writeTotalResultsMessage(totalResults) {
    let message = `\n${View.#TOTAL_RESULTS_HEAD}\n`;
    totalResults.forEach((map) => {
      message += this.writeRoundResult(map);
    });
    return message;
  }

  static writeRoundResult(map) {
    let message = '';
    map.forEach((moveCount, name) => {
      message += `${name} : ${View.#FORWARD_MARK.repeat(moveCount)}\n`;
    });
    return `${message}\n`;
  }

  static printTotalResults(totalResults) {
    const message = View.writeTotalResultsMessage(totalResults);
    Console.print(message);
  }

  static writeWinnersMessage(winners) {
    return `${View.#WINNERS_HEAD} : ${winners.join(`${View.#DELIMITER} `)}`;
  }

  static printWinners(winners) {
    const message = View.writeWinnersMessage(winners);
    Console.print(message);
  }
}

export default View;
