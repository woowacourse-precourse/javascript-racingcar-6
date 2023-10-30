import { MissionUtils } from '@woowacourse/mission-utils';

class Console {
  static #DELIMITER = ',';
  static #DELIMITER_WORD = '쉼표';
  static #CAR_NAMES_QUERY = `경주할 자동차 이름을 입력하세요.(이름은 ${
    this.#DELIMITER_WORD
  }(${this.#DELIMITER}) 기준으로 구분) `;

  static async askCarNames() {
    const string = await MissionUtils.Console.readLineAsync(
      this.#CAR_NAMES_QUERY,
    );
    const array = string.split(this.#DELIMITER);
    return array;
  }
}

export default Console;
