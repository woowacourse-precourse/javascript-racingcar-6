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

  /**
   * @callback Distances
   * @param {{ name: string, distance: number }[]} distances
   * @returns {void}
   */

  /**
   * Car[] 를 전진 시도한 후 이동 거리를 콜백하는 과정을 n 번 반복하는 메소드
   * @param {number} count 시도 횟수 
   * @param {Distances} callback 매 시도 후 결과 반환
   * @returns {void}
   */
  goForward(count, callback) {
    for (let i = 0; i < count; i++) {
      callback(this.#cars.map(car => {
        return { name: car.getName(), distance: car.goForward() };
      }));
    }
  }
}

export default CarRacingGame;