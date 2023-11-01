import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../Constant.js';

const OutputView = {
  printProgress(carNames, result) {
    Console.print(MESSAGE.result);

    result.forEach((state) => {
      carNames.forEach((carName, idx) => {
        Console.print(`${carName} : ${MESSAGE.advance.repeat(state[idx])}`);
      });
      Console.print(MESSAGE.advance.repeat('\n'));
    });
  },

  printWinner(winner) {
    Console.print(`${MESSAGE.winner}${winner.join(MESSAGE.winnerType)}`);
  },
};

export default OutputView;
