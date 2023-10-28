export default class Validation {
  static hasSpace(carNames) {
    carNames.forEach((carName) => {
      if (carName.includes(' ')) {
        throw new Error('space');
      }
    });
  }

  static isMoreThanFiveLetters(carNames) {
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error('[ERROR] : moreThanFiveLetters');
      }
    });
  }

  static hasSpecialChar(carNames) {
    carNames.forEach((carName) => {
      if (carName.match(/[^a-zA-Z0-9가-힣]/)) {
        throw new Error('specialChar');
      }
    });
  }

  static hasEmptyName(carNames) {
    carNames.forEach((carName) => {
      if (carName === '') {
        throw new Error('empty');
      }
    });
  }

  static hasDuplicateName(carNames) {
    const set = new Set(carNames);
    if (set.size !== carNames.length) {
      throw new Error('duplicate');
    }
  }
}
