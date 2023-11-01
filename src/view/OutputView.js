import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message.js';

const OutputView = {
  printResultTitleMessage() {
    Console.print(OUTPUT_MESSAGE.RESULT_TITLE);
  },

  printResultPerRound(result) {
    result.forEach(([name, position]) => {
      Console.print(`${name} : ${OUTPUT_MESSAGE.MOVING_INDICATOR.repeat(position)}`);
    });

    Console.print(OUTPUT_MESSAGE.EMPTY);
  },

  printWinner(result) {
    Console.print(`${OUTPUT_MESSAGE.WINNER} ${result.join(', ')}`);
  },
};

export default OutputView;
