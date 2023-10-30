import RandomNumberGenerator from './RandomNumberGenerator.js';
import { SYMBOLS } from '../constants/Symbols.js';
import { GRANDPRIX_MOVE_OPTION } from '../constants/GrandPrixOption.js';

export default class RacingCarGrid {
  /**
   * @private
   * @type {{ name: string, status: number }[]}
   */
  #racingCarList = [];

  /**
   * @constructor
   * @param {string} names InputView로부터 입력받은 레이싱카 이름
   */
  constructor(names) {
    names.split(SYMBOLS.comma).forEach((name) => this.#racingCarList.push({ name, status: 0 }));
  }

  /**
   * @public
   */
  setRacingGrid() {
    const randomMovementResults = RandomNumberGenerator.generate(this.#racingCarList.length);

    randomMovementResults.forEach((value, idx) => {
      if (value >= GRANDPRIX_MOVE_OPTION.move) {
        this.#racingCarList[idx].status += 1;
      }
    });
  }

  /**
   * @public
   * @returns {{name: string, status: number}[]} 레이싱카들의 현재 상태 반환
   */
  getRacingGrid() {
    return this.#racingCarList;
  }

  /**
   * @public
   * @returns {string} 가장 멀리 간 레이싱카를 반환(여러개 일 시 쉼표로 구분하여 반환)
   */
  getPodium() {
    const raceStatusList = this.#racingCarList.map(({ status }) => status);
    const max = Math.max(...Object.values(raceStatusList));

    return this.#racingCarList
      .filter(({ status }) => status === max)
      .map(({ name }) => name)
      .join(`${SYMBOLS.comma}${SYMBOLS.space}`);
  }
}
