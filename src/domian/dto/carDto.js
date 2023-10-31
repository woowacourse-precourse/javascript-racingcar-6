// @ts-check
export class CarDto {
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

  // 불변성을 위해 밖에서 읽기만 가능하게
  get name() {
    return this.#name;
  }

  get distance() {
    return this.#distance;
  }
}
