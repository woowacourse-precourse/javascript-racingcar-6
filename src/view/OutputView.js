import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../util/Constant.js';

const OutputView = {
  printResultMessage() {
    Console.print(MESSAGE.PRINT_RESULT);
  },

  printGameProcess(carLog) {
    carLog.forEach((log, carName) => {
      Console.print(`${carName} : ` + MESSAGE.PRINT_ICON.repeat(log));
    });
  },

  printWinner(winners) {
    Console.print(MESSAGE.PRINT_WINNER + winners);
  },
};

export default OutputView;
