import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from './constants.js';
import { isValidCarNames, isValidTryNum } from './Validation.js';

class InputManager {
  async enterCarNameList() {
    const input = (await Console.readLineAsync(GUIDE_MESSAGES.ENTER_CARNAMES)).split(',');
    return isValidCarNames(input) && input;
  }

  async enterTryNum() {
    const input = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_TRYNUM);
    isValidTryNum(input);
  }
}

export default InputManager;
