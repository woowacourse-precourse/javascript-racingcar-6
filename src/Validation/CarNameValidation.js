import ERROR from '../Constant/ERROR.js';
import { INPUTSET } from '../Constant/SETTING.js';
import CONSTANT from '../Constant/CONSTANT.js';

export default class CarNameValidation {
  constructor(input) {
    this.checkInputIsNull(input);
    this.checkCarNameDuplication(input.split(CONSTANT.splitCode));
    this.checkCarNameLength(input.split(CONSTANT.splitCode));
  }

  checkInputIsNull(input) {
    if (input === CONSTANT.inputNull) {
      throw new Error(ERROR.nameNotNull);
    }
  }

  checkCarNameLength(splitInput) {
    splitInput.forEach(input => {
      if (input.length < INPUTSET.minInputLen || input.length >= INPUTSET.maxInputLen) {
        throw new Error(ERROR.nameInputLen);
      }
    });
  }

  checkCarNameDuplication(splitInput) {
    const setInput = new Set(splitInput);
    if (setInput.size !== splitInput.length) {
      throw new Error(ERROR.nameNotDuplicate);
    }
  }
}
