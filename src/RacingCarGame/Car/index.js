import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from '../constants/index.js';

class Car {
  constructor(name = '') {
    this.name = name;
    this.postion = '';
  }

  canMove() {
    return Random.pickNumberInRange(NUMBER.minRandom, NUMBER.maxRandom);
  }
}

export default Car;
