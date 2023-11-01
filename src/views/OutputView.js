import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';

class OutputView {
  static printResultTitle() {
    Console.print(`\n${MESSAGES.RESULT_TITLE}`);
  }

  /**
   * 라운드별 경주 실행 결과를 출력
   * @param {object} racingCars
   */
  static printProcedureOfRace(racingCars) {
    racingCars.forEach(racingCar => {
      Console.print(
        `${racingCar.getName()} : ${MESSAGES.ADVANCE.repeat(
          racingCar.getNumberOfAdvance(),
        )}`,
      );
    });
    Console.print('');
  }

  /**
   * 최종 우승자를 출력
   * @param {object} winners
   */
  static printWinners(winners) {
    const winnerNames = winners.map(winner => winner.getName());
    Console.print(`${MESSAGES.WINNER}${winnerNames.join(', ')}`);
  }
}

export default OutputView;