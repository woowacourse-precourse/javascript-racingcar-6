import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMove(carName, distanceString, isLast) {
    Console.print(`${carName} : ${distanceString}${isLast ? '\n' : ''}`);
  },
};

export default OutputView;
