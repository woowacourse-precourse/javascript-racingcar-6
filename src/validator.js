export class CarNameValidator {
  static isValid(string) {
    const carNames = string.split(',');
    const filteredCarNames = carNames.filter((carName) => carName.length <= 5);
    return carNames.length === filteredCarNames.length;
  }
}
