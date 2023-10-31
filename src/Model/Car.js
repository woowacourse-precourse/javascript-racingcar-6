import { MissionUtils } from "@woowacourse/mission-utils";
import { RANDOM } from "../constants/random";
import { CAR } from "../constants/car";

class Car {
  #position = CAR.INITIAL_POSITION;
  #name;

  constructor(name) {
    this.#name = name;
  }

  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(RANDOM.MIN_VALUE, RANDOM.MAX_VALUE);
    if (randomNumber >= CAR.MOVE_THRESHOLD) {
      this.#position += CAR.POSITION_INCREMENT;
    }
    return { position: this.#position, name: this.#name };
  }
}

export default Car;
