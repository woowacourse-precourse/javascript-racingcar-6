class Validation {
  constructor(carNameLength) {
    this.carNameLength = carNameLength;
  }

  isValidCarName(carName) {
    return carName.length <= this.carNameLength;
  }

  isValidRaceCount(raceCount) {
    if (!Number.isInteger(raceCount)) {
      return false;
    }

    if (raceCount < 1) {
      return false;
    }

    return true;
  }
}

export default Validation;
