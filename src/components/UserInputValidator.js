import { ERROR_MESSAGE } from '../utils/constants.js';

class UserInputValidator {
  constructor(userInputCars) {
    this.userInputCars = userInputCars.split(',');
  }

  validate() {
    const IS_VALID = this.userInputCars.every(
      (carName) => carName.length <= 5 && carName.length > 0
    );

    if (!IS_VALID) {
      throw new Error(ERROR_MESSAGE.input);
    }

    return IS_VALID;
  }
}

export default UserInputValidator;
