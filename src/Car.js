import { Random, Console } from '@woowacourse/mission-utils';
import User from './User.js';

class Car {
  generateRandomNumber() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    return randomNumber;
  }
}

export default Car;
