import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Track {
  static LIMIT_NUMBER = 4;

  #cars;
  constructor(cars) {
    this.#cars = cars;
  }

  async checkCarRun(car) {
    const randomNumber = await Random.pickNumberInRange(0, 9);

    return !!(randomNumber < Track.LIMIT_NUMBER);
  }
}

export default Track;
