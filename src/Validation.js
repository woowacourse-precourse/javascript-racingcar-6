class Validation {
  constructor(carNameLength) {
    this.carNameLength = carNameLength;
  }

  isValidCarName(carName) {
    return carName.length <= this.carNameLength;
  }

  isValidRaceCount(raceCount) {
    const raceCountNumber = Number(raceCount);
    if (!Number.isInteger(raceCountNumber) || raceCountNumber <= 0) {
      throw new Error(
        '[ERROR] 숫자가 잘못된 형식입니다. 1 이상의 정수를 입력해주세요.'
      );
    }

    return true;
  }
}
