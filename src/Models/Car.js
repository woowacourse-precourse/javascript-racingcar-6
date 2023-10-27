import Name from "./Name.js";
import { Random } from "@woowacourse/mission-utils";

export default class Car {
  #MIN_VALUE = 4;
  constructor(name) {
    this.totalDistance;
    this.name = new Name(name).name;
  }
  #getRandomDistance() {
    return Random.pickNumberInRange(0, 9);
  }

  race() {
    const randomDistance = this.#getRandomDistance();
    if (randomDistance >= this.#MIN_VALUE) this.totalDistance += randomDistance;
  }
}
