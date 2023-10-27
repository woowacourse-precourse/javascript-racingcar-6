import { Random } from '@woowacourse/mission-utils';
import { NUMBER, SYMBOLS } from '../constants/index.js';

class Car {
  constructor(name = '') {
    this.name = name;
    this.postion = '';
  }

  canMove() {
    return Random.pickNumberInRange(NUMBER.minRandom, NUMBER.maxRandom);
  }

  move() {
    this.postion += this.canMove() ? SYMBOLS.move : '';
  }

  length() {
    return this.postion.length;
  }

  toStringPosition() {
    return `${this.name}${SYMBOLS.colon}${this.postion}\n`;
  }
}

export default Car;
