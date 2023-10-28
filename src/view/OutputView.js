import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResultTitleMessage() {
    Console.print('\n실행결과');
  },

  printResult(result) {
    result.forEach(([name, position]) => {
      Console.print(`${name} : ${'-'.repeat(position)}`);
    });
    Console.print('');
  },

  printWinner(result) {
    if (result.length) Console.print(`최종 우승자 : ${result.join(', ')}`);
  },
};

export default OutputView;
