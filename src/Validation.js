class Validation {
  constructor(carNameLength) {
    this.carNameLength = carNameLength;
  }

  isValidCarName(carName) {
    return carName.length <= this.carNameLength;
  }
}
