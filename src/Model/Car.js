import { Random } from "@woowacourse/mission-utils";

class Car {
  #movestat;
  #name;

  constructor(name) {
    this.#name = name;
    this.#movestat = 0;
  }

  move() {
    const randomnum = Random.pickNumberInRange(0, 9);

    if (randomnum >= 4) {
      this.#movestat++;
    }
  }

  getName() {
    return this.#name;
  }

  getMoveStat() {
    return this.#movestat;
  }
}
export default Car;
