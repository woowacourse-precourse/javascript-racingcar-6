import { Random } from '@woowacourse/mission-utils';

export default class RacingCar {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  moveForward() {}

  getRandomNumber(start, end) {
    return Random.pickNumberInRange(start, end);
  }
}
