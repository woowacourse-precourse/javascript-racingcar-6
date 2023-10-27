import { ERROR_MESSAGE } from '../utils/constants.js';

class UserInputValidator {
  constructor(userInputCars, userInputTryCount) {
    this.userInputCars = userInputCars.split(',');
    this.userInputTryCount = Number(userInputTryCount);
  }

  validateCar() {
    const IS_VALID = this.userInputCars.every(
      (carName) => carName.length <= 5 && carName.length > 0
    );

    if (!IS_VALID) {
      throw new Error(ERROR_MESSAGE.input);
    }

    return IS_VALID;
  }

  validateNumber() {
    const IS_VALID =
      typeof this.userInputTryCount === 'number' &&
      this.userInputTryCount >= 0 &&
      Math.floor(this.userInputTryCount) === this.userInputTryCount;

    if (!IS_VALID) {
      throw new Error(ERROR_MESSAGE.input);
    }

    return IS_VALID;
  }
}

export default UserInputValidator;
