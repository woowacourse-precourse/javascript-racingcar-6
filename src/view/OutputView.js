import { MissionUtils } from '@woowacourse/mission-utils';
import message from '../Constants.js';

const OutputView = {
  printResultHeader() {
    MissionUtils.Console.print(message.RESULT_HEADER);
  },

  printEmptyLine() {
    MissionUtils.Console.print(message.EMPTY_LINE);
  },

  printCarPosition(carList, tryCount) {
    for (let tryIndex = 0; tryIndex < tryCount; tryIndex++) {
      carList.forEach((car) => {
        car.move();
        MissionUtils.Console.print(`${car.name} : ${message.POSITION_UNIT.repeat(car.position)}`);
      });
      this.printEmptyLine();
    }
  },

  printWinners(winners) {
    MissionUtils.Console.print(`${message.WINNER_HEADER}${winners.join(message.WINNER_DELIMITER)}`);
  },
}

export default OutputView;