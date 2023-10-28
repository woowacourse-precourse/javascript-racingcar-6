import { ERROR } from '../constants/constants';

export default class Validation {
  static checkValidation(carNames) {
    this.hasSpace(carNames);
    this.isMoreThanFiveLetters(carNames);
    this.hasSpecialChar(carNames);
    this.hasEmptyName(carNames);
    this.hasDuplicateName(carNames);
  }

  static hasSpace(carNames) {
    carNames.forEach((carName) => {
      if (carName.includes(' ')) {
        throw new Error(ERROR.space);
      }
    });
  }

  static isMoreThanFiveLetters(carNames) {
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(ERROR.moreThanFiveLetters);
      }
    });
  }

  static hasSpecialChar(carNames) {
    carNames.forEach((carName) => {
      if (carName.match(/[^a-zA-Z0-9가-힣]/)) {
        throw new Error(ERROR.specialChar);
      }
    });
  }

  static hasEmptyName(carNames) {
    carNames.forEach((carName) => {
      if (carName === '') {
        throw new Error(ERROR.empty);
      }
    });
  }

  static hasDuplicateName(carNames) {
    const set = new Set(carNames);
    if (set.size !== carNames.length) {
      throw new Error(ERROR.duplicate);
    }
  }
}
