import RacingCar from './RacingCar.js';
import RandomNumberGenerator from './RandomNumberGenerator.js';
import { SYMBOLS } from '../constants/Symbols.js';
import { GRANDPRIX_MAGICNUMBER } from '../constants/GrandPrixOption.js';

export default class RacingCarGrid {
  #racingCarList;

  constructor(names) {
    this.#racingCarList = Array.from(names.split(SYMBOLS.comma), (name) => new RacingCar(name));
  }

  setRacingGrid() {
    const randomMovementResults = RandomNumberGenerator.generate(this.#racingCarList.length);
    randomMovementResults.forEach((value, idx) => {
      if (value >= GRANDPRIX_MAGICNUMBER.move) {
        this.#racingCarList[idx].moveRacingCar();
      }
    });
  }

  getRacingGrid() {
    return Array.from(this.#racingCarList, (racingCar) => racingCar.getRacingCarStatus());
  }

  getPodium() {
    const racingGrid = this.getRacingGrid();
    const raceStatusList = racingGrid.map(({ status }) => status);
    const max = Math.max(...Object.values(raceStatusList));

    return racingGrid
      .filter(({ status }) => status === max)
      .map(({ name }) => name)
      .join(`${SYMBOLS.comma}${SYMBOLS.space}`);
  }
}
