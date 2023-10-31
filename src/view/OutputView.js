import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMove(carName, distanceString, isLast) {
    Console.print(`${carName} : ${distanceString}${isLast ? '\n' : ''}`);
  },

  printWinner(winner) {
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  },
};

export default OutputView;
