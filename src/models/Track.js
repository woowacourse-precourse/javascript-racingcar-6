import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Track {
  static LIMIT_NUMBER = 4;

  /** @type {Car[]} */
  #cars;

  /**
   * Car 배열을 받는다.
   * @param {Car[]} cars
   */
  constructor(cars) {
    this.#cars = cars;
  }

  async checkCarMove(car) {
    const randomNumber = await Random.pickNumberInRange(0, 9);

    return !!(randomNumber < Track.LIMIT_NUMBER);
  }

  moveCarsCheckCondition() {
    this.#cars.forEach((car) => {
      if (!this.checkCarMove(car)) return;

      car.moveForward();
    });
  }

  getCars() {
    return this.#cars;
  }

  getChampions() {
    const maxDistance = Math.max(...this.#cars.map((car) => car.getCarDistance()));
    const champions = this.#cars.filter((car) => car.getCarDistance() === maxDistance);
    return champions;
  }
}

export default Track;
