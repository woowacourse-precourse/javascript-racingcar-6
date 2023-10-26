import { ERROR_MESSAGES } from '../constants/index.js';

class InputValidator {
  static validateCarNames(carNames) {
    carNames.forEach(el => {
      if (el.length > 5) throw new Error(ERROR_MESSAGES.tooLongCarName);
      if (!el.length) throw new Error(ERROR_MESSAGES.emptyCarName);
    });
  }
}

export default InputValidator;
