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
};

export default outputView;
