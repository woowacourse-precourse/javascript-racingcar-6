import { Random } from '@woowacourse/mission-utils';
import Screen from './Screen.js';

const RANDOM_NUMBER_RANGE_FROM = 0;
const RANDOM_NUMBER_RANGE_TO = 9;
const CAR_MOVE_POINT = 4;

class Car {
  #name;
  #movingCount;

  constructor(name) {
    this.#name = name;
    this.#movingCount = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(
      RANDOM_NUMBER_RANGE_FROM,
      RANDOM_NUMBER_RANGE_TO
    );
    if (randomNumber >= CAR_MOVE_POINT) {
      this.#movingCount += 1;
    }
  }

  status() {
    return `${this.#name} : ${Screen.makeDashString(this.#movingCount)}`;
  }

  getMovingCount() {
    return this.#movingCount;
  }

  getCarName() {
    return this.#name;
  }
}

export default Car;
