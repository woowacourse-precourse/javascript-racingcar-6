import Car from './Car.js';

class CarRacingGame {
  /** @type {Car[]} 게임에 참가하는 Car */
  #cars

  /** @constructor */
  constructor() {
    this.#cars = [];
  }

  /** @param {Car[]} cars */
  setCars(cars) {
    this.#cars = cars;
  }
}

export default CarRacingGame;