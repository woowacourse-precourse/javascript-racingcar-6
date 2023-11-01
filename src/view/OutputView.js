import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, GAME_STRING } from '../constants/constants';

const OutputView = {
  printStart() {
    Console.print(OUTPUT_MESSAGE.PROGRESS_RESULT);
  },

  printMove(moves) {
    moves.forEach(([name, distance]) => {
      Console.print(`${name} : ${'-'.repeat(distance)}`);
    });
  },

  printWinner(winner) {
    Console.print(OUTPUT_MESSAGE.WINNER(winner.join(GAME_STRING.WINNER_JOIN)));
  },

  printBlank() {
    Console.print('');
  },
};

export default OutputView;
