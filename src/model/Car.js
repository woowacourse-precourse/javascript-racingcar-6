import { Random } from '@woowacourse/mission-utils';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  /**
   * 자동차의 이름을 반환합니다.
   * @returns {string} [자동차 이름]
   */
  getName() {
    return this.name;
  }

  oneStepForward() {
    this.distance += 1;
  }

  /**
   * 움직인 거리를 반환합니다.
   * @returns {number} [움직인 거리]
   */
  getDistance() {
    return this.distance;
  }

  tryToMove() {
    const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);

    if (RANDOM_NUMBER >= 4) {
      this.oneStepForward();
    }
  }
}
