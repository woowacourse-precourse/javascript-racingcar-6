import { MissionUtils } from "@woowacourse/mission-utils";
import { RACINGCAR_DISPLACEMENT } from "../constants/consoleMessages.js";

class RacingCar {
  #name;
  #displacement;

  constructor(name) {
    this.#name = name;
    this.#displacement = 0;
  }

  advance() {
    const randomNumer = MissionUtils.Random.pickNumberInRange(0, 9);

    if (randomNumer >= 4) {
      this.#displacement += 1;
    }
  }

  getName() {
    return this.#name;
  }

  getDisplacement() {
    return this.#displacement;
  }

  getState() {
    const stringDisplacement = RACINGCAR_DISPLACEMENT.repeat(this.#displacement);
    const state = `${this.#name} : ${stringDisplacement}`;

    return state
  }
}

export default RacingCar;
