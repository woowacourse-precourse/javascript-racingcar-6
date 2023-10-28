import { ERROR_MESSAGE } from '../constant/message';
import CAR_NAME_MAX_LENGTH from '../constant/maxLength';

class Validator {
  static emptyInput(names) {
    if (names.trim() === '') {
      throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
    }
  }

  static specialCharactor(names) {
    if (!/^[a-zA-Z가-힣0-9, ]*$/.test(names)) {
      throw new Error(ERROR_MESSAGE.INVALID_INPUT);
    }
  }

  static overTwoNames(names) {
    if (!names.includes(',')) {
      throw new Error(ERROR_MESSAGE.LESS_TWO_NAME);
    }
  }

  static nameLength(names) {
    names.split(',').forEach((carName) => {
      if (carName.trim().length > CAR_NAME_MAX_LENGTH) {
        throw new Error(ERROR_MESSAGE.OVER_LENGTH_NAME);
      }
    });
  }

  static carsNameInput(names) {
    this.emptyInput(names);
    this.specialCharactor(names);
    this.overTwoNames(names);
    this.nameLength(names);
  }
}

export default Validator;
