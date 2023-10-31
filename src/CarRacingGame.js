import Car from "./Car";

class CarRacingGame {
  /**@type {Car[]} */
  #cars;

  /**@constructor */
  constructor() {
    this.#cars = [];
  }

  /**@param {Car[]} cars */
  setCars(cars) {
    this.#cars = cars;
  }
}
