import { Random } from '@woowacourse/mission-utils';
import Screen from './Screen.js';
class Car {
  #name;
  #movingCount;

  constructor(name) {
    this.#name = name;
    this.#movingCount = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.#movingCount += 1;
    }
  }

  status() {
    return `${this.#name} : ${Screen.makeDashString(this.#movingCount)}`;
  }
}

export default Car;
