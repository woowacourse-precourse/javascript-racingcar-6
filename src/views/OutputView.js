import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

class OutputView {
  // 전진 결과 출력
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

  // 우승자 출력
  printWinner(winners) {
    Console.print(this.formatWinner(winners));
  }

  formatWinner(winners) {
    return `${MESSAGES.winner} ${winners.join(', ')}`;
  }
}

export default OutputView;
