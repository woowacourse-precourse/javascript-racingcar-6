import { Console } from '@woowacourse/mission-utils';
import { GAME_MESSAGE } from '../constants/Message.js';
import { SYMBOL_SETTING } from '../constants/Setting.js';

const OutputView = {
  printResultInfo() {
    Console.print(GAME_MESSAGE.processResult);
  },

  printEmptystring() {
    Console.print(SYMBOL_SETTING.emptyString);
  },

  printRoundResult(status) {
    Console.print(status);
  },

  printFinalResult(winner) {
    Console.print(`${GAME_MESSAGE.winner}${winner}`);
  },
};

export default OutputView;
