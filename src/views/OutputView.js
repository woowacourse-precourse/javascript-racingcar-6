import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from '../constants/messages.js';

/**
 * 사용자에게 결과를 출력할 때 View
 */
class OutputView {
  /**
   * 전진 결과 출력
   * @param {{name: string; position: number;}[]} cars 자동차 정보 객체 배열
   */
  printAdvanceResult(cars) {
    cars?.forEach((car) => {
      Console.print(this.formatAdvanceResult(car));
    });
    Console.print('\n');
  }

  /**
   * 전진 결과를 포맷팅하여 반환
   * @param {{name: string; position: number;}}} 자동차 정보 객체
   * @returns {string} 포맷팅된 문구
   */
  formatAdvanceResult({ name, position }) {
    return `${name} : ${MESSAGES.moveForward.repeat(position)}`;
  }

  /**
   * 우승자 출력
   * @param {string[]} winners 우승자 이름이 담긴 배열
   */
  printWinner(winners) {
    Console.print(this.formatWinner(winners));
  }

  /**
   * 우승자를 포맷팅하여 반환
   * @param {string[]} winners 우승자 이름이 담긴 배열
   * @returns {string} 포맷팅된 문구
   */
  formatWinner(winners) {
    return `${MESSAGES.winner} ${winners.join(', ')}`;
  }
}

export default OutputView;
