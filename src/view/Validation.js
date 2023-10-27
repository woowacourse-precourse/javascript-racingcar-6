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
}
