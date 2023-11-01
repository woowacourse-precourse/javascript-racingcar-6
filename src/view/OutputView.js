import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constants/consoleMessages.js';

class OutputView {
  printQuery(query) {
    Console.print(query);
  }

  retryInputRacingCarNames() {
    this.printQuery(CONSOLE_MESSAGE.outputRetryInputNames);
  }

  printRacingCarState(car) {
    this.printQuery(car.getState());
  }

  outputRetryResult() {
    this.printQuery(CONSOLE_MESSAGE.outputRetryResult);
  }

  printNewLine() {
    this.printQuery(CONSOLE_MESSAGE.newLine);
  }

  outputFinalResult(names) {
    this.printQuery(`${CONSOLE_MESSAGE.outputFinalResult} : ${names}`);
  }
}

export default OutputView;
