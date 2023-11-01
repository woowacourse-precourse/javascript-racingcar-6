import { Console } from '@woowacourse/mission-utils';

const OutputView = Object.freeze({
  print(message) {
    Console.print(message);
  },

  lineBreak() {
    OutputView.print('\n');
  },
});

export default OutputView;
