import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../constants/messages.js';
import { MOVE_OUTPUT_CHAR } from '../constants/constants.js';

const outputView = {
  raceResultTitle() {
    Console.print(OUTPUT_MSG.RESULT);
  },

  raceResult(name, count) {
    const movingRecord = MOVE_OUTPUT_CHAR.repeat(count);
    Console.print(`${name} : ${movingRecord}`);
  },

  raceResultNewLine() {
    Console.print('');
  },

  winner(winners) {
    const winnersStr = winners.join(', ');
    Console.print(`${OUTPUT_MSG.WINNER}${winnersStr}`);
  },
};

export default outputView;
