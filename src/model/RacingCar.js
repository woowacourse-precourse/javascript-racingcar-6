export default class RacingCar {
  /**
   * @private
   * @type {string}
   */
  #name;

  /**
   * @private
   * @type {number}
   */
  #status = 0;

  /**
   * @constructor
   * @param {string} name 자동차의 이름
   */
  constructor(name) {
    this.#name = name;
  }

  /**
   * @public
   */
  moveRacingCar() {
    this.#status += 1;
  }

  /**
   * @public
   * @returns {{name: string, status: number}} 레이싱카의 현재 상태
   */
  getRacingCarStatus() {
    return { name: this.#name, status: this.#status };
  }
}
