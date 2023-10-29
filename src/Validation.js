class Validation {
  VALIDATION_STANDARD = {
    minimumNameLength: 5,
    minimumRaceCount: 1,
  };

  isValidCarName(carName) {
    return carName.length <= this.VALIDATION_STANDARD.minimumNameLength;
  }

  isValidRaceCount(raceCount) {
    if (!Number.isInteger(raceCount)) {
      return false;
    }

    if (raceCount < VALIDATION_STANDARD.minimumRaceCount) {
      return false;
    }

    return true;
  }
}

export default Validation;
