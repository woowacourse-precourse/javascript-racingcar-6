import Name from "./Name.js";
import { Random } from "@woowacourse/mission-utils";

const CAR_SETTINGS = Object.freeze({
  move_threshold: 4,
  min_random_value: 0,
  max_random_value: 9,
});

export default class Car {
  constructor(name) {
    this.totalDistance = 0;
    this.name = new Name(name).name;
  }

  race() {
    const randomDistance = this.#getRandomDistance();
    if (randomDistance >= CAR_SETTINGS.move_threshold) this.totalDistance += 1;
  }

  #getRandomDistance() {
    return Random.pickNumberInRange(
      CAR_SETTINGS.min_random_value,
      CAR_SETTINGS.max_random_value
    );
  }
}
