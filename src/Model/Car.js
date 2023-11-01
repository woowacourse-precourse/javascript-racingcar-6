import { RandomGenerator } from "../utils/RandomGenerator";

class Car {
  #movestat;
  #name;

  constructor(name) {
    this.#name = name;
    this.#movestat = 0;
  }

  move() {
    const randomnum = RandomGenerator();

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
