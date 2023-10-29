import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResultMessage() {
    Console.print('\n실행 결과');
  },

  printGameProcess(carLog) {
    carLog.forEach((log, carName) => {
      Console.print(`${carName} : ` + '-'.repeat(log));
    });
  },

  printWinner(winners) {
    Console.print(`최종 우승자 : ${winners}`);
  },
};

export default OutputView;
