import { Random } from '@woowacourse/mission-utils';
import { CAR } from './Constants.js';

class Car {
  #name
  #distance

  /**
   * @constructor 
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  /**
   * @returns {string} 이름
   */
  getName() {
    return this.#name;
  }

  // 전진을 시도하는 메소드
  goForward() {
    if (Random.pickNumberInRange(...CAR.FORWARD_RANGE) >= CAR.FORWARD_CONDITION) {
      this.#distance += 1;
    }
  }
}

export default Car;