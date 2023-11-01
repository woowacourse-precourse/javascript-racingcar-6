import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from './Constants.js';

class Winner {
  finalWinner(cars, allForwardResult) {
    const forwardCount = allForwardResult.map(
      result => result.split('-').length - 1,
    );
    const maxForwardCount = Math.max(...forwardCount);
    const finalWinnerCar = [];

    forwardCount.forEach((count, index) => {
      if (count === maxForwardCount) {
        finalWinnerCar.push(cars[index]);
      }
    });

    this.printFinalWinner(finalWinnerCar);
  }

  printFinalWinner(finalWinnerCar) {
    Console.print(GAME_MESSAGE.winner + finalWinnerCar.join(', '));
  }
}

export default Winner;
