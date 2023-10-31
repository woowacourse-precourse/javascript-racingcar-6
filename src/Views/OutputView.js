import {Console} from '@woowacourse/mission-utils';
import MESSAGES from '../../utils/Messages';

const OutputView = {
  printResult(racingCar) {
    this.printProgressStatus(racingCar);
    this.printWinner(racingCar);
  },
  printProgressStatus(racingCar) {
    const totalProgressStatus = racingCar
      .getTotalProgressStatus()
      .map((progressStatus) => progressStatus.join(MESSAGES.lineBreak) + MESSAGES.lineBreak)
      .join(MESSAGES.lineBreak);
    Console.print(MESSAGES.result + totalProgressStatus);
  },
  printWinner(racingCar) {
    Console.print(MESSAGES.finalWinner + racingCar.getWinner().join(MESSAGES.winnerDelimeter));
  },
};

export default OutputView;
