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
};

export default OutputView;
