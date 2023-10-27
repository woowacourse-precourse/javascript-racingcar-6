class CarRacingGame {
  #cars;
  #round;

  constructor(carNames, round) {
    this.#cars = carNames;
    this.#round = round;
  }

  race() {}

  getRoundResult() {}

  getWinners() {}
}

export default CarRacingGame;
