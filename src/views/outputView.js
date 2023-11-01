import { Console } from '@woowacourse/mission-utils';
import GAME_MESSAGE from '../constants/gameMessage.js';
import GAME_OPTION from '../constants/gameOption.js';

class OutputView {
  print(query) {
    Console.print(query);
    return this;
  }

  printNewLine() {
    this.print('');
  }

  printRoundResultHeader() {
    this.print(GAME_MESSAGE.ROUND_RESULT_HEADER);
  }

  printCarList(carList) {
    carList.forEach((car) => {
      const forwardCountIndicator = GAME_OPTION.FORWARD_INDICATOR.repeat(
        car.forwardCount,
      );
      this.print(`${car.carName} : ${forwardCountIndicator}`);
    });
    this.printNewLine();
  }

  printWinner(winnerList) {
    const names = winnerList.join(', ');
    this.print(`${GAME_MESSAGE.FINAL_WINNER} ${names}`);
  }
}

export default OutputView;
