class Validation {
  VALIDATION_STANDARD = {
    minimumNameLength: 5,
    minimumRacingCount: 1,
  };

  isValidCarName(carName) {
    return carName.length <= this.VALIDATION_STANDARD.minimumNameLength;
  }

  isValidRacingCount(racingCount) {
    if (!Number.isInteger(racingCount)) {
      return false;
    }

    if (racingCount < VALIDATION_STANDARD.minimumRacingCount) {
      return false;
    }

    return true;
  }
}

export default Validation;
