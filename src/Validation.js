class Validation {
  STANDARD = {
    maximumNameLength: 5,
    minimumRacingCount: 1,
  };

  isValidCarName(carName) {
    return carName.length <= this.STANDARD.maximumNameLength;
  }

  isValidRacingCount(racingCount) {
    if (!Number.isInteger(racingCount)) {
      return false;
    }

    if (racingCount < this.STANDARD.minimumRacingCount) {
      return false;
    }

    return true;
  }
}

export default Validation;
