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

  printRoundResultMessage() {
    this.print(GAME_MESSAGE.roundResult);
  }

  printCarList(carList) {
    carList.forEach((car) => {
      const forwardCountIndicator = GAME_OPTION.forwardIndicator.repeat(
        car.forwardCount,
      );
      this.print(`${car.carName} : ${forwardCountIndicator}`);
    });
    this.printNewLine();
  }

  printWinner(winnerList) {
    const names = winnerList.join(', ');
    this.print(`${GAME_MESSAGE.finalWinner} ${names}`);
  }
}

export default OutputView;
