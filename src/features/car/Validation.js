import { DIVIDER, MESSAGE, CAR_NAME_LIMIT } from '../../constants.js';

export class CarNameValidation {
  constructor(input) {
    this.input = input.split(DIVIDER);
  }

  isOverFive() {
    return this.input.some((input) => input.length > CAR_NAME_LIMIT);
  }

  validate() {
    if (this.isOverFive()) {
      throw new Error(MESSAGE.CAR_NAME.ERROR.IS_OVER_FIVE);
    }
  }
}
