import { Random } from '@woowacourse/mission-utils';
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
}

export default Car;
