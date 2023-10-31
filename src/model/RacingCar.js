import { MissionUtils } from "@woowacourse/mission-utils";
import OutputView from "../view/OutputView.js";

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
    let stringDisplacement = '-'.repeat(this.#displacement)
    const state = `${this.#name} : ${stringDisplacement}`;

    return state
  }
}

export default RacingCar;