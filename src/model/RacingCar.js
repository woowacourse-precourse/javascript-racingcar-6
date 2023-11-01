import { GRANDPRIX_MOVE_OPTION } from '../constants/GrandPrixOption.js';

export default class RacingCar {
  /**
   * @private
   * @type {string}
   */
  #name = '';

  /**
   * @private
   * @type {number}
   */
  #status = 0;

  constructor(name) {
    this.#name = name;
  }

  /**
   * @public
   * @param {number} randomNumber
   */
  move(randomNumber) {
    if (randomNumber >= GRANDPRIX_MOVE_OPTION.move) {
      this.#status += 1;
    }
  }

  /**
   * @public
   * @returns {{name: string, status: number}}
   */
  getRacingCarInfo() {
    return { name: this.#name, status: this.#status };
  }
}
