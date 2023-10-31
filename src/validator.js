export class CarNameLengthValidator {
  static isValid(string) {
    const carNames = string.split(',');
    const filteredCarNames = carNames.filter(
      (carName) => carName.length > 0 && carName.length <= 5
    );
    return carNames.length === filteredCarNames.length;
  }
}

export class CarNameDuplicateValidator {
  static isValid(string) {
    const carNames = string.split(',');
    const uniqueCarNames = new Set(carNames);
    return carNames.length === uniqueCarNames.size;
  }
}
