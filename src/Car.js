import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBER } from './constants/constants';

class Car {
  constructor(name, count) {
    this.name = name;
    this.count = count;
  }

  getRandomNumber() {
    const num = Random.pickNumberInRange(RANDOM_NUMBER.MIN, RANDOM_NUMBER.MAX);
    return num;
  }
}

export default Car;
