import { Random } from '@woowacourse/mission-utils';

export default class Car {
  constructor() {
    this.RANDOM_NUMER = '';
    this.GET_RANDOM = '';
    this.MOVE_COUNT = 0;
    this.POSITION = '';
  }

  generateRandomNum() {
    this.RANDOM_NUMER = Random.pickNumberInRange(0, 9);
    return this.RANDOM_NUMER;
  }
}
