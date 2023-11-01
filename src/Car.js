import { MissionUtils } from "@woowacourse/mission-utils";
import {
  MIN_RANDOM_NUMBER,
  MAX_RANDOM_NUMBER,
  FORWARD_THRESHOLD,
} from "./constants/Racing";

class Car {
  name = "";
  position = 0;

  constructor(carName) {
    this.name = carName;
  }

  static #randomNumGenerate() {
    const randomNum = MissionUtils.Random.pickNumberInRange(
      MIN_RANDOM_NUMBER,
      MAX_RANDOM_NUMBER
    );
    return randomNum;
  }

  #printPosition() {
    MissionUtils.Console.print(`${this.name} : ${"-".repeat(this.position)}`);
  }

  move() {
    const randomNum = Car.#randomNumGenerate();
    if (randomNum >= FORWARD_THRESHOLD) this.position += 1;
    this.#printPosition();
  }
}

export default Car;
