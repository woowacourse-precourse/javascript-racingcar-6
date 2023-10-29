import { Console } from '@woowacourse/mission-utils';
import drawStep from '../utils/drawStep.js';
import { OUTPUT_MESSAGE } from '../constants.js';

const OutputView = {
  printTryResultMessage() {
    Console.print('');
    Console.print(OUTPUT_MESSAGE.result);
  },

  printStep(cars) {
    cars.forEach((car) => Console.print(drawStep(car)));
    Console.print('');
  },

  printWinners(names) {
    Console.print(`최종 우승자 : ${names.join(', ')}`);
  },
};

export default OutputView;
