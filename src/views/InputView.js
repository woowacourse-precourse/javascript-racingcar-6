import { Console } from '@woowacourse/mission-utils';
import MESSAGES from '../constants/Messages.js';

class InputView {
  static askCarNames() {
    return Console.readLineAsync(`${MESSAGES.CAR_NAME_INPUT}\n`);
  }

  static askTotalRound() {
    return Console.readLineAsync(`${MESSAGES.TOTAL_ROUND_INPUT}\n`);
  }
}

export default InputView;
