import { Random } from '@woowacourse/mission-utils';
import { NUMBER, SYMBOLS, RANDOM } from '../constants/index.js';

class Car {
  constructor(name = '') {
    this.name = name;
    this.postion = '';
  }

  canMove() {
    return Random.pickNumberInRange(RANDOM.min, RANDOM.max) >= NUMBER.canMove;
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
