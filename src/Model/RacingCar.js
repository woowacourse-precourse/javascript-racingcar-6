export default class RacingCar {
  #racingCars;

  constructor() {
    this.#racingCars = [];
  }

  getRacingCars(carNames) {
    const racingCars = carNames.split(',');
    this.#racingCars.push(...racingCars);
  }
}
