import { Random } from "@woowacourse/mission-utils";
import {MIN_RANDOM_NUMBER,MAX_RANDOM_NUMBER} from './Constant.js'

export default class Car {
  #carName = "";

  #distance = "";

  constructor(name) {
    this.#carName = name;
  }

  getName() {
    return this.#carName;
  }

  getMovedDistance() {
    return this.#distance;
  }

  tryAdvance() {
    const minumumCriteria = 4;
    const randomNumber = Random.pickNumberInRange(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    if (randomNumber >= minumumCriteria) this.#distance += "-";
  }
}
