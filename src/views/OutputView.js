import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/views.js';

const OutputView = {
  printResultText() {
    return Console.print(OUTPUT_MESSAGE.resultText);
  },

  printCarPosition(car) {
    return Console.print(
      OUTPUT_MESSAGE.printCarPosition(car.name, car.position),
    );
  },

  printLine() {
    return Console.print('');
  },

  printWinners(winners) {
    return Console.print(OUTPUT_MESSAGE.prinitWinners(winners));
  },
};

export default OutputView;
