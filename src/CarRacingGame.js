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

  /**@callback Distances
   * @param {{ name: string, distance:number}[]}Distances
   * @return {void}
   */

  /**
   * @param {number} count
   * @param {Distances} callback
   * @returns {void}*/
  moveForward(count, callback) {
    for (let i = 0; i < count; i++) {
      callback(
        this.#cars.map((car) => ({
          name: car.getName(),
          distance: car.moveForward(),
        }))
      );
    }
  }
}
