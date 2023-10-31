import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printProgress(carNames, result) {
    Console.print('\n실행결과');

    result.map((state) => {
      carNames.map((carName, idx) => {
        Console.print(`${carName} : ${'-'.repeat(state[idx])}`);
      });
      Console.print('-'.repeat('\n'));
    });
  },

  printWinner(winner) {
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default OutputView;