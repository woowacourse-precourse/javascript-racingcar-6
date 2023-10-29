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
};

export default OutputView;
