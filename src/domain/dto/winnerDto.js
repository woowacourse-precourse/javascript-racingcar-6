// @ts-check
export class WinnerDto {
  /**
   * @type {string}
   */
  #winnerName;
  /**
   * @type {number}
   */
  #distance;

  /**
   *
   * @param {string} winnerName
   * @param {number} distance
   */
  constructor(winnerName, distance) {
    this.#winnerName = winnerName;
    this.#distance = distance;
  }
  get winner() {
    return this.#winnerName;
  }

  get distance() {
    return this.#distance;
  }
}
