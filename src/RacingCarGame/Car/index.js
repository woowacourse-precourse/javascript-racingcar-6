import { Random } from '@woowacourse/mission-utils';
import { NUMBER, SYMBOLS } from '../constants/index.js';

class Car {
  constructor(name = '') {
    this.name = name;
    this.postion = '';
  }

  canMove() {
    return (
      Random.pickNumberInRange(NUMBER.minRandom, NUMBER.maxRandom) >=
      NUMBER.canMove
    );
  }

  move() {
    if (this.canMove()) {
      this.postion += SYMBOLS.move;
    }
  }

  countMove() {
    return this.postion.length;
  }

  toStringPosition() {
    return `${this.name}${SYMBOLS.colon}${this.postion}\n`;
  }
}

export default Car;
