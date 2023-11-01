import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';

class OutputView {
  static printResultTitle() {
    Console.print(`\n${MESSAGES.RESULT_TITLE}\n`);
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
        )}\n`,
      );
    });
    Console.print('\n');
  }

  /**
   * 최종 우승자를 출력
   * @param {object} winners
   */
  static printWinners(winners) {
    Console.print(`${MESSAGES.WINNER}${winners.join(', ')}`);
  }
}

export default OutputView;