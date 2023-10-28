import { Random } from '@woowacourse/mission-utils';
import { MIN_NUMBER, MAX_NUMBER, MOVABLE_NUMBER } from '../constants.js';

class RandomNumber {
  #randomNumber;

  constructor() {
    this.create();
  }

  create() {
    this.randomNumber = Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
  }

  canMove() {
    return this.randomNumber >= MOVABLE_NUMBER;
  }
}

export default RandomNumber;
