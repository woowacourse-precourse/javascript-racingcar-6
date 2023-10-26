import { ERROR_MESSAGES, rSpecialChar } from '../constants/index.js';

class InputValidator {
  static validateCarNames(carNames) {
    const nameSet = new Set();

    carNames.forEach(el => {
      if (el.length > 5) throw new Error(ERROR_MESSAGES.tooLongName);
      if (!el.length) throw new Error(ERROR_MESSAGES.emptyName);
      if (rSpecialChar.test(el)) throw new Error(ERROR_MESSAGES.noSpecialChar);
      if (nameSet.has(el)) throw new Error(ERROR_MESSAGES.noDuplicateName);

      nameSet.add(el);
    });
  }
}

export default InputValidator;
