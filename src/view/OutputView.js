import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constants/consoleMessages.js';

class OutputView {
  retryInputRacingCarNames() {
    Console.print(CONSOLE_MESSAGE.outputRetryInputNames);
  }

  printRacingCarState(car) {
    Console.print(car.getState());
  }

  outputRetryResult() {
    Console.print(CONSOLE_MESSAGE.outputRetryResult);
  }

  printNewLine() {
    Console.print(CONSOLE_MESSAGE.newLine);
  }
}

export default OutputView;