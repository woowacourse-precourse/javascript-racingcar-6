import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../Constant/MESSAGE.js';

const outputView = {
  printResult() {
    Console.print(MESSAGE.newline);
    Console.print(MESSAGE.result);
  },

  printTrack(carsName, carsPosition) {
    carsName.forEach((carName, i) => {
      Console.print(`${carName} : ${carsPosition[i]}`);
    });
    Console.print(MESSAGE.newline);
  },
};

export default outputView;
