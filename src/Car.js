import { Random } from "@woowacourse/mission-utils";
import NUMBER from "./constant/NUMBER.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  #isForwardMovement(number) {
    return number >= NUMBER.MIN_FORWARD;
  }

  moveRandomly() {
    const randomNumber = Random.pickNumberInRange(
      NUMBER.RANDOM_MIN,
      NUMBER.RANDOM_MAX
    );

    if (this.#isForwardMovement(randomNumber)) {
      ++this.#position;
    }

    return this;
  }
}

export default Car;
