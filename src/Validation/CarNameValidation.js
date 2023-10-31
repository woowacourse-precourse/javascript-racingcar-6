import ERROR from '../Constant/ERROR.js';

export default class CarNameValidation {
  constructor(input) {
    this.checkInputIsNull(input);
    this.checkCarNameDuplication(input.split(','));
    this.checkCarNameLength(input.split(','));
  }

  checkInputIsNull(input) {
    if (input === '') {
      throw new Error(ERROR.nameNotNull);
    }
  }

  checkCarNameLength(splitInput) {
    splitInput.forEach(input => {
      if (input.length < 1 || input.length >= 5) {
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
