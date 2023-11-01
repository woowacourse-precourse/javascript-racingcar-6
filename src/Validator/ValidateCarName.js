import { ERROR_MESSAGE, REGEXP } from '../constants/Constants';

class ValidateCarName {
  isValidLength = (carNames) => {
    const LENGTH_REGEX = REGEXP.lengthRegex;
    return carNames.every((name) => LENGTH_REGEX.test(name));
  };

  isValidString = (carNames) => {
    const NAME_REGEX = REGEXP.nameRegex;
    return carNames.every((name) => NAME_REGEX.test(name));
  };

  isValidDuplication = (carNames) => {
    const carSet = new Set(carNames);
    return carSet.size === carNames.length;
  };

  isValid = (carNames) => {
    if (!this.isValidLength(carNames)) {
      throw new Error(ERROR_MESSAGE.lengthError);
    }

    if (!this.isValidString(carNames)) {
      throw new Error(ERROR_MESSAGE.stringError);
    }

    if (!this.isValidDuplication(carNames)) {
      throw new Error(ERROR_MESSAGE.duplicationError);
    }
  };
}

export default ValidateCarName;
