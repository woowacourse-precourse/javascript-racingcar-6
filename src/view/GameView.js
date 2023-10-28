import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';

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

  printWinner(winners) {
    Console.print(`${MESSAGE.WINNER}${winners}`);
  }
}
