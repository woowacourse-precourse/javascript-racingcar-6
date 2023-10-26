class Car {
  #name

  /**
   * @constructor 
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
  }

  /**
   * @returns {string} 이름
   */
  getName() {
    return this.#name;
  }
}