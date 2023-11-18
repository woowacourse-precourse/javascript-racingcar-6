import { MissionUtils } from '@woowacourse/mission-utils';
import { RULE, MESSAGE } from '../constants/index.js';

class Car {
  name = '';

  movement = [];

  constructor(text) {
    this.name = text;
  }
  handleMovement() {
    const { min, max } = RULE.randomNumber;
    const randomNumber = MissionUtils.Random.pickNumberInRange(min, max);
    if (randomNumber >= RULE.pointOfMovement)
      this.movement.push(MESSAGE.movement);
  }
}

export default Car;
