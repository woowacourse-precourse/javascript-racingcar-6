import { Random } from '@woowacourse/mission-utils';
import { MOVE_FORWARD_CRITERIA } from './constants.js';
class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
    this.randomNumber = -1;
  }

  async generateRandomNumber() {
    return await Random.pickNumberInRange(0, 9);
  }

  async canMove() {
    const randomNumber = await this.generateRandomNumber();
    return randomNumber >= MOVE_FORWARD_CRITERIA;
  }
}

export default Car;
