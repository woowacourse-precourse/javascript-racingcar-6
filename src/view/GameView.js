import { Console } from '@woowacourse/mission-utils';

export default class GameView {
  #stepSymbol = '-';

  print(message = '') {
    Console.print(message);
  }

  async getUserInput(query) {
    return Console.readLineAsync(query);
  }

  printResult({ name, count }) {
    Console.print(`${name} : ${this.#stepSymbol.repeat(count)}`);
  }
}
