import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';

export default class GameView {
  #stepSymbol = '-';

  print(message = '') {
    Console.print(message);
  }

  getUserInputAsync(query) {
    return Console.readLineAsync(query);
  }

  printResult({ name, count }) {
    Console.print(`${name} : ${this.#stepSymbol.repeat(count)}`);
  }

  printWinner(winners) {
    if (!winners.length) {
      this.printNoWinners();
      return;
    }

    this.printWinnerNames(winners);
  }

  printNoWinners() {
    this.print(`${MESSAGE.WINNER}${MESSAGE.NONE}`);
  }

  printWinnerNames(winners) {
    const winnerNames = winners.map((winner) => winner.name).join(', ');
    this.print(`${MESSAGE.WINNER}${winnerNames}`);
  }
}
