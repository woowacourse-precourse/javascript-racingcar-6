import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';

export default class GameView {
  #stepSymbol = '-';

  print(message = '') {
    Console.print(message);
  }

  getUserInput(query) {
    return Console.readLineAsync(query);
  }

  printResult({ name, count }) {
    Console.print(`${name} : ${this.#stepSymbol.repeat(count)}`);
  }

  printWinner(winners) {
    if (!winners.length) {
      return Console.print(`${MESSAGE.WINNER}${MESSAGE.NONE}`);
    }

    const winnerNames = winners.map((winner) => winner.name).join(', ');
    Console.print(`${MESSAGE.WINNER}${winnerNames}`);
  }
}
