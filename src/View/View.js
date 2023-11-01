import { Console } from '@woowacourse/mission-utils';

import InputView from './InputView.js';
import OutputView from './OutputView.js';

import MESSAGE from '../constants/Message.js';
import CHARACTER from '../constants/Character.js';

class View {
  #outputView = OutputView;

  #inputView = InputView;

  async readCarNames() {
    return await this.#inputView.inputLine(MESSAGE.NAME);
  }

  async readAttempt() {
    return await this.#inputView.inputLine(MESSAGE.ATTEMPT);
  }

  printResult(result) {
    this.#outputView.printLine(MESSAGE.RESULT);
    result.forEach((round) => {
      round.forEach(({ name, position }) => {
        Console.print(`${name} : ${CHARACTER.HYPHEN.repeat(position)}`);
      });
      Console.print(CHARACTER.EMPTY);
    });
  }

  printWinner(winner) {
    this.#outputView.printLine(`${MESSAGE.WINNER}${winner}`);
  }
}

export default View;
