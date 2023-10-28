import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constants/consoleMessages.js';

class OutputView {
  async retryInputRacingCarNames() {
    Console.print(CONSOLE_MESSAGE.outputRetryInputNames);
  }
}

export default OutputView;