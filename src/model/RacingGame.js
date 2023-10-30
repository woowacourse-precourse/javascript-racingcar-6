class RacingGame {
  constructor() {
    /** @type {Array} */
    this.racingCar = [];
  }

  get getRacingCar() {
    return this.racingCar;
  }

  set setRacingCar(racingCars) {
    racingCars.forEach((car) => this.racingCar.push(car));
  }
}

export default RacingGame;
