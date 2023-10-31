import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constant.js';

const OutputView = {
  printProgress(carNames, result) {
    Console.print(MESSAGE.result);

    result.map((state) => {
      carNames.map((carName, idx) => {
        Console.print(`${carName} : ${MESSAGE.advance.repeat(state[idx])}`);
      });
      Console.print(MESSAGE.advance.repeat('\n'));
    });
  },

  printWinner(winner) {
    Console.print(`${MESSAGE.winner}${winner.join(MESSAGE.winnerType)}`);
  }
}

export default OutputView;