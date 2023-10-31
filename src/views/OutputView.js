import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

class OutputView {
  printAdvanceResult(cars) {
    cars?.forEach((car) => {
      Console.print(this.formatAdvanceResult(car));
    });
    Console.print('\n');
  }

  formatAdvanceResult({ name, position }) {
    return `${name} : ${this.generateAdvanceString(position)}`;
  }

  generateAdvanceString(position) {
    return MESSAGES.moveForward.repeat(position);
  }
}

export default OutputView;
