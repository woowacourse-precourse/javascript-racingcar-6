import { Console } from '@woowacourse/mission-utils';

const PrinterView = {
  print(message) {
    Console.print(message);
  },

  printNewLine() {
    this.print('\n');
  },
};

export default PrinterView;
