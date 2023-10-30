class RacingCar {
  static MOVE_THRESHOLD = 4;

  static MAX_CAR_NAME_LENGTH = 5;

  #racingCarInfo;

  constructor(racingCarInfo) {
    this.#racingCarInfo = { ...racingCarInfo };
  }

  static from(racingCarInfo) {
    return new RacingCar(racingCarInfo);
  }

  move(randomNumber) {
    const { position: prevPosition } = this.#racingCarInfo;
    return randomNumber >= RacingCar.MOVE_THRESHOLD
      ? { ...this.#racingCarInfo, position: prevPosition + 1 }
      : this.#racingCarInfo;
  }
}

export default RacingCar;
