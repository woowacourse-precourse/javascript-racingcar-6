import { Console } from '@woowacourse/mission-utils';
import { InputView } from './InputView.js';
import { MESSAGE } from '../constants/Message.js';
import { ERROR } from '../constants/Error.js';

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

  throwError(message, condition) {
    if (condition) {
      return;
    }
    throw new Error(`${ERROR.PREFIX}` + message + `${ERROR.TRY_AGAIN}`);
  },
};
