import { Console } from '@woowacourse/mission-utils';
import drawStep from '../utils/drawStep.js';

const OutputView = {
  printStep(cars) {
    cars.forEach((car) => Console.print(drawStep(car)));
    Console.print('');
  },
};

export default OutputView;
