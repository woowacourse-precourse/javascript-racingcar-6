import RacingCar from './RacingCar.js';
import RandomNumberGenerator from './RandomNumberGenerator.js';
import { SYMBOLS } from '../constants/Symbols.js';
import { GRANDPRIX_MAGICNUMBER } from '../constants/GrandPrixOption.js';

export default class RacingCarGrid {
  /**
   * @private
   * @type {RacingCar[]}
   */
  #racingCarList;

  /**
   * @constructor
   * @param names InputView로부터 입력받은 레이싱카 이름
   */
  constructor(names) {
    this.#racingCarList = Array.from(names.split(SYMBOLS.comma), (name) => new RacingCar(name));
  }

  /**
   * @public
   */
  setRacingGrid() {
    const randomMovementResults = RandomNumberGenerator.generate(this.#racingCarList.length);
    randomMovementResults.forEach((value, idx) => {
      if (value >= GRANDPRIX_MAGICNUMBER.move) {
        this.#racingCarList[idx].moveRacingCar();
      }
    });
  }

  /**
   * @public
   * @returns {{name: string, status: number}[]} 레이싱카들의 현재 상태 반환
   */
  getRacingGrid() {
    return Array.from(this.#racingCarList, (racingCar) => racingCar.getRacingCarStatus());
  }

  /**
   * @public
   * @returns {string} 가장 멀리 간 레이싱카를 반환(여러개 일 시 쉼표로 구분하여 반환)
   */
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
