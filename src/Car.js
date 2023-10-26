import { Random } from '@woowacourse/mission-utils';
import { CAR } from './Constants.js';

class Car {
  /** @type {string} */
  #name
  /** @type {number} */
  #distance

  /**
   * @constructor 
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  /** @returns {string} 이름 */
  getName() {
    return this.#name;
  }

  // 전진을 시도하는 메소드
  goForward() {
    if (Random.pickNumberInRange(...CAR.FORWARD_RANGE) >= CAR.FORWARD_CONDITION) {
      this.#distance += 1;
    }
  }

  /** @returns {number} 이동 거리 */
  getDistance() {
    return this.#distance;
  }
}

export default Car;