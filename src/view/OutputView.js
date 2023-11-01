import { MissionUtils } from '@woowacourse/mission-utils';
// import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE, GAME_STRING } from '../constants/constants';

const OutputView = {
  printStart() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.PROGRESS_RESULT);
  },

  printMove(moves) {
    moves.forEach(([name, distance]) => {
      MissionUtils.Console.print(`${name} : ${'-'.repeat(distance)}`);
    });
  },

  printWinner(winner) {
    MissionUtils.Console.print(
      OUTPUT_MESSAGE.WINNER(winner.join(GAME_STRING.WINNER_JOIN))
    );
  },

  printBlank() {
    MissionUtils.Console.print('');
  },
};

export default OutputView;
