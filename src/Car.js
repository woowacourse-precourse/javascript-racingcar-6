import { Random } from "@woowacourse/mission-utils";
import RACE_INFO from "./constants/raceInfo.js";

class Car {
  #position = 0;
  #name;

  constructor(name) {
    this.#name = name;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(
      RACE_INFO.minRandomNumber,
      RACE_INFO.maxRandomNumber
    );

    if (randomNumber >= RACE_INFO.forwardThreshold) {
      this.#position += 1;
    }
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }
}

export default Car;
