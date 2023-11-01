class Validation {
  STANDARD = {
    maximumNameLength: 5,
    minimumNameLength: 1,
    minimumRacingCount: 1,
  };

  isValidCarName(carName) {
    const trimmedCarName = carName.trim();
    if (
      trimmedCarName.length <= this.STANDARD.maximumNameLength
      && trimmedCarName.length >= this.STANDARD.minimumNameLength
    ) {
      return true;
    }

    return false;
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
