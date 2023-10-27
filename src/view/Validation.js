export default class Validation {
  static hasSpace(carNames) {
    carNames.foreach((carName) => {
      if (carName.includes(' ')) {
        throw new Error('space');
      }
    });
  }
}
