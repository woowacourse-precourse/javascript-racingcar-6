// @ts-check
export class WinnerDto {
  /**
   * @type {string}
   */
  #winner;
  /**
   * @type {number}
   */
  #distance;

  /**
   *
   * @param {string} winner
   * @param {number} distance
   */
  constructor(winner, distance) {
    this.#winner = winner;
    this.#distance = distance;
  }
  get winner() {
    return this.#winner;
  }

  get distance() {
    return this.#distance;
  }
}
