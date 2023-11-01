import { ERROR_MESSAGE, REGEXP } from '../constants/Constants';

class ValidateCarName {
  constructor() {}

  isValidLength = (cars) => {
    const LENGTH_REGEX = REGEXP.lengthRegex;
    return cars.every((name) => LENGTH_REGEX.test(name));
  };

  isValidString = (cars) => {
    const NAME_REGEX = REGEXP.nameRegex;
    return cars.every((name) => NAME_REGEX.test(name));
  };

  isValidDuplication = (cars) => {
    const carSet = new Set(cars);
    return carSet.size === cars.length;
  };

  isValid = (cars) => {
    if (!this.isValidLength(cars)) {
      throw new Error(ERROR_MESSAGE.lengthError);
    }

    if (!this.isValidString(cars)) {
      throw new Error(ERROR_MESSAGE.stringError);
    }

    if (!this.isValidDuplication(cars)) {
      throw new Error(ERROR_MESSAGE.duplicationError);
    }
  };
}

export default ValidateCarName;
