/* eslint-disable import/extensions */
import { Random } from '@woowacourse/mission-utils';

export default class Car {
  constructor() {
    this.RANDOM_NUMER = '';
    this.GET_RANDOM = '';
    this.CAN_MOVE_FORWARD = 4;
    this.MOVE_COUNT = 0;
    this.POSITION = '';
  }

  generateRandomNum() {
    this.RANDOM_NUMER = Random.pickNumberInRange(0, 9);
    return this.RANDOM_NUMER;
  }

  canMove(tryNum) {
    for (let n = 0; n < tryNum; n += 1) {
      this.GET_RANDOM = this.generateRandomNum();
      if (this.GET_RANDOM > this.CAN_MOVE_FORWARD) {
        this.MOVE_COUNT += 1;
        this.POSITION += '-';
      }
    }
  }
}
