import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, GAME_STRING } from '../constants/constants';

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.PROGRESS_RESULT);
  },

  printMove(carName, distanceString, isLast) {
    let result = OUTPUT_MESSAGE.PROGRESS(carName, distanceString);
    if (isLast) result += GAME_STRING.NEW_LINE;
    Console.print(result);
  },

  printWinner(winner) {
    Console.print(OUTPUT_MESSAGE.WINNER(winner.join(GAME_STRING.WINNER_JOIN)));
  },
};

export default OutputView;
