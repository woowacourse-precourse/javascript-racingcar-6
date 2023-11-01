import { Random } from '@woowacourse/mission-utils';
import { NUMBER, SYMBOLS, RANDOM } from '../constants/index.js';

class Car {
  constructor(name = '') {
    this.name = name;
    this.position = '';
  }

  getName() {
    return this.name;
  }

  canMove() {
    return Random.pickNumberInRange(RANDOM.min, RANDOM.max) >= NUMBER.canMove;
  }

  move() {
    if (this.canMove()) {
      this.position += SYMBOLS.move;
    }
  }

  countMove() {
    return this.position.length;
  }

  formatPosition() {
    return `${this.name}${SYMBOLS.colon}${this.position}${SYMBOLS.lineBreak}`;
  }
}

export default Car;
