import { Random } from '@woowacourse/mission-utils';

class Car {
  /**
   *
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  addDistance() {
    const randomNum = Random.pickNumberInRange(0, 9);
    const isAdd = randomNum >= 4 ? true : false;

    if (isAdd) this.distance += 1;
  }
}

export default Car;
