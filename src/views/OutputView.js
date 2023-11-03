import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../utils/Constant.js';

const OutputView = {
  printResultMessage() {
    Console.print(MESSAGE.PRINT_RESULT);
  },

  printRaceProcess(records) {
    records.forEach((log, carName) => {
      Console.print(`${carName} : ` + MESSAGE.PRINT_ICON.repeat(log));
    });
  },

  printWinner(winners) {
    Console.print(MESSAGE.PRINT_WINNER + winners);
  },
};

export default OutputView;
