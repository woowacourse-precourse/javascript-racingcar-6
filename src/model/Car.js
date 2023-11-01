class Car {
  #racingCars;
  #attempt;

  constructor(racingCars) {
    this.#racingCars = {};
    racingCars.split(",").forEach((key) => (this.#racingCars[key] = ""));
  }
  setRacingAttempt(attempt) {
    this.#attempt = attempt;
  }
}
const car = new Car();
