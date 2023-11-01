import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../utils/constants';
import formatOutput from '../utils/formatOutput';

const OutputView = {
  printMessage: () => {
    Console.print(OUTPUT_MESSAGE.RESULT);
  },
  roundResult: cars => {
    const result = formatOutput.makeRoundMessage(cars);
    Console.print(result);
  },
  winnerResult: winners => {
    const result = formatOutput.makeWinnerMessage(winners);
    Console.print(result);
  },
};

export default OutputView;
