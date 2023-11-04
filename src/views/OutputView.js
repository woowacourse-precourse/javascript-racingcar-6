import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

class OutputView {
  /**
   * @param {{name: string; position: number;}[]} cars 자동차 정보 객체 배열
   */
  printAdvanceResult(cars) {
    cars?.forEach((car) => {
      Console.print(this.formatAdvanceResult(car));
    });
    Console.print('\n');
  }

  printWinner(winners) {
    Console.print(this.formatWinner(winners));
  }

  formatAdvanceResult({ name, position }) {
    return `${name} : ${MESSAGES.moveForward.repeat(position)}`;
  }

  formatWinner(winners) {
    return `${MESSAGES.winner} ${winners.join(', ')}`;
  }
}

export default OutputView;
