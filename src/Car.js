import { Random } from "@woowacourse/mission-utils";

export default class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  move() {
    if (this.#getRandomNumber() >= 4) {
      this.#distance++;
      return;
    }
    return;
  }

  #getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }

  toString() {
    return `${this.#name} : ${"-".repeat(this.#distance)}`;
  }

  get carName() {
    return this.#name;
  }
  get distance() {
    return this.#distance;
  }
}
