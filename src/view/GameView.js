import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/messages.js';
import { STEP_SYMBOL } from '../constants/gameRules.js';

export default class GameView {
  print(message = '') {
    Console.print(message);
  }

  getUserInputAsync(query) {
    return Console.readLineAsync(query);
  }

  printResult({ name, count }) {
    Console.print(`${name} : ${STEP_SYMBOL.repeat(count)}`);
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
