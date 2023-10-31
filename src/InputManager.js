import { GUIDE_MESSAGES } from './constants.js';
import { isValidCarNames } from './Validation.js';

class InputManager {
  async getCarNames() {
    const input = (await Console.readLineAsync(GUIDE_MESSAGES.ENTER_CARNAMES)).split(',');
    return isValidCarNames(input) && input;
  }
}

export default InputManager;
