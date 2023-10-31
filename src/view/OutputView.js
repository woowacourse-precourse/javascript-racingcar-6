import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../utils/constants';
import getData from '../utils/getData';

const OutputView = {
  printMessage: () => {
    Console.print(OUTPUT_MESSAGE.RESULT);
  },
  roundResult: cars => {
    const result = getData.getRoundData(cars);
    Console.print(result);
  },
  winnerResult: winners => {
    const result = getData.getWinnerData(winners);
    Console.print(result);
  },
};

export default OutputView;
