// @ts-check
export class WinnerDto {
  /**
   * @type {string}
   */
  #name;
  /**
   * @type {number}
   */
  #distance;

  /**
   *
   * @param {string} name
   * @param {number} distance
   */
  constructor(name, distance) {
    this.#name = name;
    this.#distance = distance;
  }
  get name() {
    return this.#name;
  }

  get distance() {
    return this.#distance;
  }
}
