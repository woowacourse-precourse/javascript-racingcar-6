import RacingCar from './RacingCar.js';

export default class RacingCarGrid {
  #racingCarList;

  constructor(names) {
    this.#racingCarList = Array.from(names.split(','), (name) => new RacingCar(name));
  }

  getRacingGrid() {
    return Array.from(this.#racingCarList, (racingCar) => racingCar.getRacingCarStatus());
  }
}
