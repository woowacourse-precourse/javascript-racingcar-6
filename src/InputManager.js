import { Console } from '@woowacourse/mission-utils';
import { GUIDE_MESSAGES } from './constants.js';

class InputManager {
  async getCarNames() {
    const input = await Console.readLineAsync(GUIDE_MESSAGES.ENTER_CARNAMES);
  }
}

export default InputManager;
