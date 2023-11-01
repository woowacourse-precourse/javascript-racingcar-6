import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from './Constants.js';
import { isValidCarNames, isValidTryNum } from './Validation.js';

class InputManager {
  async enterCarNameList() {
    const input = (await Console.readLineAsync(GUIDE_MESSAGES.ENTER_CARNAMES)).split(',');
    if (input.at(-1) === '') input.pop();
    return isValidCarNames(input) && input;
  }

  async enterTryNum() {
    const input = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_TRYNUM);
    return isValidTryNum(input) && Number(input);
  }
}

export default InputManager;
