import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  #position = 0;
  #name;

  constructor(name) {
    this.#name = name;
  }

  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.#position += 1;
    }
    return this.#position;
  }
}

export default Car;
