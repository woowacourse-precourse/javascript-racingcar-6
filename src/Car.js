import { Random } from "@woowacourse/mission-utils";

class Car {
  /** @type {string} */
  #name;
  /**@type {number} */
  #distance;

  /**
   * @consturctor
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
    if (Random.pickNumberInRange([...0, 9]) >= 4) {
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
