import { MissionUtils } from '@woowacourse/mission-utils';
import { OUTPUT_RESULT, OUTPUT_WINNER, MARK_MOVE } from './Constant.js';

const outputView = {
  printResult() {
    MissionUtils.Console.print(OUTPUT_RESULT);
  },

  printCarResult(name, move) {
    MissionUtils.Console.print(`${name} : ${move}`);
  },

  raceResultNewLine() {
    MissionUtils.Console.print('');
  },

  printWinner(winner) {
    const winners = winner.join(', ');
    MissionUtils.Console.print(`${OUTPUT_WINNER}${winners}`);
  },
};

export default outputView;