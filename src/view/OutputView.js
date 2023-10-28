import { Console } from '@woowacourse/mission-utils';
import { GRANDPRIX_RESULT_NOTIFICATION } from '../constants/GrandPrixMessage.js';
import { SYMBOLS } from '../constants/Symbols.js';

const OutputView = Object.freeze({
  printLapResult() {
    return Console.print(GRANDPRIX_RESULT_NOTIFICATION.printLapResult);
  },

  printRacingGrid(racingGrid) {
    racingGrid.forEach(({ name, status }) =>
      Console.print(GRANDPRIX_RESULT_NOTIFICATION.printRacingGrid(name, status)),
    );
    Console.print(SYMBOLS.empty);
  },

  printRaceWinner(winner) {
    return Console.print(GRANDPRIX_RESULT_NOTIFICATION.printRaceWinner(winner));
  },
});

export default OutputView;
