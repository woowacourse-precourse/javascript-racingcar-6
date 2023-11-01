import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from './Constants.js';
import { isValidCarNames, isValidTryNum } from './Validation.js';

class InputManager {
  async enterCarNameList() {
    const input = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_CARNAMES);
    const carNames = input.split(',');
    if (carNames.at(-1) === '') carNames.pop();
    return isValidCarNames(carNames) && carNames;
  }

  async enterTryNum() {
    const input = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_TRYNUM);
    const tryNum = parseInt(input, 10);
    return isValidTryNum(input, tryNum) && tryNum;
  }
}

export default InputManager;
