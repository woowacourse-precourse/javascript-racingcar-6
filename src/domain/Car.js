import ApplicationError from '../exceptions/ApplicationError.js';

import ERROR_MESSAGE from '../constants/error.js';

class Car {
  /**
   * Car의 move 판별 기준 (power가 이 값 미만이면 전진하지 않는다)
   * @type {4}
   */
  static DEAD_ZONE = 4;

  /**
   * Car의 move 호출 시 이동 거리
   * @type {1}
   */
  static SPEED = 1;

  /**
   * Car의 스키드 마크
   * @type {'-'}
   */
  static SKID_MARK = '-';

  /**
   * Car의 이동 거리
   * @type {number}
   * @private
   */
  #distance = 0;

  static of() {
    return new Car();
  }

  /**
   * 자동차의 현재 이동 거리를 반환합니다.
   * @returns {number} 현재 이동 거리
   */
  getDistance() {
    return this.#distance;
  }

  /**
   * 자동차를 주어진 동력으로 이동시킵니다.
   * @param {number} power 동력
   */
  move(power) {
    this.#validateMove(power);

    if (power >= Car.DEAD_ZONE) {
      this.#distance += Car.SPEED;
    }
  }

  /**
   * @param {number} power 동력
   */
  #validateMove(power) {
    if (typeof power !== 'number') {
      throw new ApplicationError(ERROR_MESSAGE.car.isNotNumberMoveArg);
    }
  }
}

export default Car;
