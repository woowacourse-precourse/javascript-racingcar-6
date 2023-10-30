import { Console } from '@woowacourse/mission-utils';
import { InputView } from './InputView.js';
import { MESSAGE } from '../constants/Message.js';

export const View = {
  async readCarNames() {
    return await InputView.inputLine(MESSAGE.NAME);
  },

  async readAttempt() {
    return await InputView.inputLine(MESSAGE.ATTEMPT);
  },

  printResultHeader() {
    Console.print(MESSAGE.RESULT);
  },
};
