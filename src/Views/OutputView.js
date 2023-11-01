import {Console} from '@woowacourse/mission-utils';
import MESSAGES from '../../utils/Messages';

const OutputView = {
  printResultMessage() {
    Console.print(MESSAGES.lineBreak);
    Console.print(MESSAGES.result);
  },

  printProgressStatus(racingCar) {
    racingCar.getTotalProgressStatus().forEach((progressStatus) => Console.print(progressStatus));
    Console.print(MESSAGES.lineBreak);
  },

  printWinner(racingCar) {
    Console.print(MESSAGES.finalWinner + racingCar.getWinner().join(MESSAGES.winnerDelimeter));
  },
};

export default OutputView;
