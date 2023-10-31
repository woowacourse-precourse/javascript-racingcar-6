import { Console, Random } from '@woowacourse/mission-utils';
import { MOVE_FORWARD_CRITERIA } from './constants.js';
class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  async move() {
    const randomNumber = await this.generateRandomNumber();
    if (this.getIsCanMove(randomNumber)) this.updateMoveCount();
  }

  async generateRandomNumber() {
    return await Random.pickNumberInRange(0, 9);
  }

  getIsCanMove(randomNumber) {
    return randomNumber >= MOVE_FORWARD_CRITERIA;
  }

  updateMoveCount() {
    this.moveCount += 1;
  }
}

export default Car;
