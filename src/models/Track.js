import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Track {
  static limitNumber = 4;

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

    return !!(randomNumber < Track.limitNumber);
  }

  async moveCarsCheckCondition() {
    const movePromises = this.#cars.map((car) => this.checkCarMove(car));
    const results = await Promise.all(movePromises);

    results.forEach((canCarMove, index) => {
      if (!canCarMove) return;

      this.#cars[index].moveForward();
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
