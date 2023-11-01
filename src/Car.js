import { Random } from "@woowacourse/mission-utils";
import { CAR } from "./Constant";

class Car {
  /** @type {string} */
  #name;
  /**@type {number} */
  #distance;

  /**
   * @constructor
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }
  /**@returns {string}*/
  getName() {
    return this.#name;
  }
  /**@returns {number} */
  moveForward() {
    if (
      Random.pickNumberInRange(...CAR.FORWARD_RANGE) >= CAR.FORWARD_CONDITION
    ) {
      this.#distance += 1;
    }
    return this.#distance;
  }

  /**@returns {number} */
  getDistance() {
    return this.#distance;
  }
}
export default Car;
