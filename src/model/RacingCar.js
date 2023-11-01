import { MissionUtils } from '@woowacourse/mission-utils';
import { RACINGCAR_DISPLACEMENT } from "../constants/ConsoleMessages.js";
import { SETTINGS } from "../constants/Settings.js";

class RacingCar {
  #name;
  #displacement;

  constructor(name) {
    this.#name = name;
    this.#displacement = 0;
  }

  advance() {
    const randomNumer = MissionUtils.Random.pickNumberInRange(
      SETTINGS.randomRange.minimum,
      SETTINGS.randomRange.maximum
    );

    if (randomNumer >= SETTINGS.minimumAdvance) {
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

    return state;
  }
}

export default RacingCar;
