import { ErrorMessage } from './errorMessage.js';

export class CarNameValidator {
  static isValidLength(string) {
    const carNames = string.split(',');
    const filteredCarNames = carNames.filter(
      (carName) => carName.length > 0 && carName.length <= 5
    );
    return carNames.length === filteredCarNames.length;
  }

  static isUnique(string) {
    const carNames = string.split(',');
    const uniqueCarNames = new Set(carNames);
    return carNames.length === uniqueCarNames.size;
  }

  static isAlphabetOnly(string) {
    const regex = /^[a-zA-Z]*$/;
    const carNames = string.split(',');
    const isAllTrue = carNames
      .map((car) => regex.test(car))
      .every((car) => car === true);

    return isAllTrue;
  }

  static validate(string) {
    if (!this.isValidLength(string)) {
      return ErrorMessage.getInvalidLengthMessage();
    }
    if (!this.isUnique(string)) {
      return ErrorMessage.getDuplicateNameMessage();
    }
    if (!this.isAlphabetOnly(string)) {
      return ErrorMessage.getAlphabetOnlyMessage();
    }
    return null;
  }
}
