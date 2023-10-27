export default class Validation {
  static hasSpace(carNames) {
    carNames.foreach((carName) => {
      if (carName.includes(' ')) {
        throw new Error('space');
      }
    });
  }

  static hasSpecialChar(carNames) {
    carNames.foreach((carName) => {
      if (carName.match(/[^a-zA-Z0-9가-힣]/)) {
        throw new Error('specialChar');
      }
    });
  }

  static hasEmptyName(carNames) {
    carNames.foreach((carName) => {
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

  static isMoreThanFiveLetters(carNames) {
    carNames.foreach((carName) => {
      if (carName.length > 5) {
        throw new Error('moreThanFiveLetters');
      }
    });
  }
}
