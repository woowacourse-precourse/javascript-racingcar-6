import RacingCar from './RacingCar.js';
import RandomNumberGenerator from './RandomNumberGenerator.js';

export default class RacingCarGrid {
  #racingCarList;

  constructor(names) {
    this.#racingCarList = Array.from(names.split(','), (name) => new RacingCar(name));
  }

  setRacingGrid() {
    const randomMovementResults = RandomNumberGenerator.generate(this.#racingCarList.length);
    randomMovementResults.forEach((value, idx) => {
      if (value >= 4) {
        this.#racingCarList[idx].moveRacingCar();
      }
    });
  }

  getRacingGrid() {
    return Array.from(this.#racingCarList, (racingCar) => racingCar.getRacingCarStatus());
  }
}
