import { Random } from "@woowacourse/mission-utils";

export default class Car {
  #carName = "";

  #distance = "";

  constructor(name) {
    this.#carName = name;
  }

  getName() {
    return this.#carName;
  }

  getMovedDistance() {
    return this.#distance;
  }

  tryAdvance() {
    const minumumCriteria = 4;
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= minumumCriteria) this.#distance += "-";
  }
}
