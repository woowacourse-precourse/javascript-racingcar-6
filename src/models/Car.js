class Car {
  /** @type {string} */
  #carName;

  /** @type {number} */
  #position;

  /**
   * @param {string} carName
   */
  constructor(carName) {
    this.#carName = carName;
    this.#position = 0;
  }

  getCarName() {
    return this.#carName;
  }
}

export default Car;
