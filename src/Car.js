import { MissionUtils } from '@woowacourse/mission-utils';
import { utils } from './constant/utils';

class Car {
  #name;
  #moveCount;

  constructor(name) {
    utils.isString(name);
    this.#name = name;
    this.#moveCount = 0;
  }

  getName() {
    return this.#name;
  }

  getMoveCount() {
    return this.#moveCount;
  }

  move() {
    const random = MissionUtils.Random.pickNumberInRange(0, 9);
    if (random > 3) {
      this.#moveCount += 1;
    }
    return this.#moveCount;
  }

  print() {
    MissionUtils.Console.print(`${this.#name} : ${('-'.repeat(this.#moveCount))}`);
  }
}

export default Car;
