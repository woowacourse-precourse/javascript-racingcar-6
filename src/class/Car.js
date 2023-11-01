import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
  }

  #current = 0;

  moveForward() {
    if (MissionUtils.Random.pickNumberInRange(1, 9) >= 4) {
      this.#current += 1;
    }
  }

  get current() {
    return this.#current;
  }
}

export default Car;
