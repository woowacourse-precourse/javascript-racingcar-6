import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printProgress(data) {
    data.forEach((progress, name) => {
      this.print(`${name} : ${progress}`);
    });
    this.print('');
  },

  printFinalWinner(finalWinner) {
    this.print(`최종 우승자 : ${finalWinner.join(', ')}`);
  },
};

export default OutputView;
