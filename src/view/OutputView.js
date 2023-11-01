import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE_FUNCTION } from '../constants/Messages.js';

const OutputView = {
  /**
   * @param {string} message
   */
  print(message) {
    Console.print(message);
  },

  /**
   * @param {Map} racingResult
   */
  printRacingResult(racingResult) {
    racingResult.forEach((progress, vehicleName) => Console.print(`${vehicleName} : ${progress}`));
  },

  /**
   * @param {string[]} finalWinner
   */
  printFinalWinner(finalWinner) {
    this.print(OUTPUT_MESSAGE_FUNCTION.finalWinner(finalWinner));
  },
};

export default OutputView;
