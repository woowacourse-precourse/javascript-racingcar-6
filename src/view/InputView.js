import { Console } from '@woowacourse/mission-utils';
import { CONSOLE_MESSAGE } from '../constants/consoleMessages.js';
// import RacingCarValidator from '../validate/RacingCarValidator.js';

class InputView {

  async readracingCarNames() {
    const inputValue = await Console.readLineAsync(CONSOLE_MESSAGE.inputracingCarName);
    const inputArray = inputValue.split(',')

    return inputArray;
  }

}

export default InputView;
