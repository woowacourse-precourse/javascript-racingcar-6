import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constants/consoleMessages.js';

class InputView {

  async readRacingCarNames() {
    const inputName = await Console.readLineAsync(CONSOLE_MESSAGE.inputRacingCarName);
    const nameArray = inputName.split(',');

    return nameArray;
  }


  async readRetryCount() {
    const inputRetryCount = await Console.readLineAsync(CONSOLE_MESSAGE.inputRetryCount);

    return inputRetryCount;
  }
}

export default InputView;
