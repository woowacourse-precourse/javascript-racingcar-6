import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER, MOVE } from './constants/constants';

class Car {
  constructor(name, count) {
    this.name = name;
    this.count = count;
    this.result = '';
  }

  getRandomNumber() {
    const num = Random.pickNumberInRange(RANDOM_NUMBER.MIN, RANDOM_NUMBER.MAX);
    return num;
  }

  move() {
    const randomizeNumber = this.getRandomNumber();

    if (randomizeNumber >= MOVE.CONSTRAINT_NUM) {
      return (this.result += MOVE.SYMBOL);
    }
  }
}

export default Car;
