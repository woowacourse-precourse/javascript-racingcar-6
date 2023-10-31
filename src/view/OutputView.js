import { Console } from '@woowacourse/mission-utils';
import { GRANDPRIX_RESULT_NOTIFICATION } from '../constants/GrandPrixMessage.js';
import { SYMBOLS } from '../constants/Symbols.js';

const OutputView = Object.freeze({
  /**
   * @public
   * @returns void
   */
  printLapResult() {
    Console.print(GRANDPRIX_RESULT_NOTIFICATION.printLapResult);
  },

  /**
   * @public
   * @param {{name: string, status: number}[]} racingGrid
   * @returns {void}
   */
  printRacingGrid(racingGrid) {
    racingGrid.forEach(({ name, status }) =>
      Console.print(GRANDPRIX_RESULT_NOTIFICATION.printRacingGrid(name, status)),
    );
    Console.print(SYMBOLS.empty);
  },

  /**
   * @public
   * @param {string} winner
   * @returns {void}
   */
  printRaceWinner(winner) {
    Console.print(GRANDPRIX_RESULT_NOTIFICATION.printRaceWinner(winner));
  },
});

export default OutputView;
