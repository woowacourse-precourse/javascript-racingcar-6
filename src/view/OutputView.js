import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE_FUNCTION } from '../constants/Messages.js';

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printRacingResult(racingResult) {
    racingResult.forEach((progress, vehicleName) => Console.print(`${vehicleName} : ${progress}`));
  },

  printFinalWinner(finalWinner) {
    this.print(OUTPUT_MESSAGE_FUNCTION.finalWinner(finalWinner));
  },
};

export default OutputView;
