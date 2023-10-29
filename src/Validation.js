class Validation {
  STANDARD = {
    minimumNameLength: 5,
    minimumRacingCount: 1,
  };

  isValidCarName(carName) {
    return carName.length <= this.STANDARD.minimumNameLength;
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
