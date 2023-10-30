import { MESSAGE } from '../../constants.js';

export class TryValidation {
  constructor(input) {
    this.input = Number(input);
  }

  isNotInput() {
    return this.input === 0;
  }

  isMinus() {
    return this.input < 0;
  }

  isNotNumber() {
    return !Number.isSafeInteger(this.input);
  }

  validate() {
    if (this.isNotInput()) {
      throw new Error(MESSAGE.TRY.ERROR.IS_NOT_INPUT);
    }

    if (this.isNotNumber()) throw new Error(MESSAGE.TRY.ERROR.IS_NOT_NUMBER);

    if (this.isMinus()) throw new Error(MESSAGE.TRY.ERROR.IS_MINUS);
  }
}
