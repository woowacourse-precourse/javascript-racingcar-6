import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../Constant/MESSAGE.js';

const outputView = {
  printResult() {
    Console.print(MESSAGE.newline);
    Console.print(MESSAGE.result);
  },

  printTrack(cars) {
    cars.forEach(car => {
      Console.print(`${car.name} : ${car.position}`);
    });
    Console.print(MESSAGE.newline);
  },

  printWinners(winners) {
    Console.print(`${MESSAGE.winner} ${winners.join(', ')}`);
  },
};

export default outputView;
