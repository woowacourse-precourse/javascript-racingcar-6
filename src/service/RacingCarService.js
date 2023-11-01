import RandomNumberGenerator from '../model/RandomNumberGenerator.js';
import { SYMBOLS } from '../constants/Symbols.js';
import RacingCar from '../model/RacingCar.js';

export default class RacingCarService {
  /**
   * @private
   * @type {RacingCar[]}
   */
  #racingCarList;

  /**
   * @constructor
   * @param {string} names InputView로부터 입력받은 레이싱카 이름
   */
  constructor(names) {
    this.#racingCarList = names.split(SYMBOLS.comma).map((name) => new RacingCar(name));
  }

  /**
   * @public
   */
  setRacingGrid() {
    const randomMovementResults = RandomNumberGenerator.generate(this.#racingCarList.length);

    randomMovementResults.forEach((value, idx) => {
      this.#racingCarList[idx].move(value);
    });
  }

  /**
   * @public
   * @returns {{name: string, status: number}[]} 레이싱카들의 현재 상태 반환
   */
  getRacingGrid() {
    return this.#racingCarList.map((racingCar) => racingCar.getRacingCarInfo());
  }

  /**
   * @public
   * @returns {string} 가장 멀리 간 레이싱카를 반환(여러개 일 시 쉼표로 구분하여 반환)
   */
  getPodium() {
    const racingCarInfoList = this.#racingCarList.map((racingCar) => racingCar.getRacingCarInfo());
    const racingCarStatusList = racingCarInfoList.map(({ status }) => status);
    const max = Math.max(...racingCarStatusList);

    return racingCarInfoList
      .filter(({ status }) => status === max)
      .map(({ name }) => name)
      .join(`${SYMBOLS.comma}${SYMBOLS.space}`);
  }
}
