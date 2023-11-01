import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';

class InputView {
  static askCarNames() {
    try {
      return Console.readLineAsync(`${MESSAGES.CAR_NAME_INPUT}\n`);
    } catch {
      throw new Error(MESSAGES.GENERAL_ERROR);
    }
  }

  static askTotalRound() {
    try {
      return Console.readLineAsync(`${MESSAGES.TOTAL_ROUND_INPUT}\n`);
    } catch {
      throw new Error(MESSAGES.GENERAL_ERROR);
    }
  }
}

export default InputView;
