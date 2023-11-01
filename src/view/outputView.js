import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constants/message.js';

const outputView = {
  printTitle() {
    MissionUtils.Console.print(OUTPUT_MESSAGE.RESULT);
  },

  printResult(name, move) {
    MissionUtils.Console.print(`${name} : ${move}`);
  },

  printNewline() {
    MissionUtils.Console.print('\n');
  },

  printWinner(winners) {
    MissionUtils.Console.print(`${OUTPUT_MESSAGE.WINNERS}${winners.join(', ')}`);
  },
};

export default outputView;
