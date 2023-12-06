import { MissionUtils } from '@woowacourse/mission-utils';
import { RULE, MESSAGE } from '../constants/index.js';

class Car {
  /**
   * @type {string}
   */
  name;
  /**
   * @type {MESSAGE.movement[]}
   * @description MESSAGE.movement = '-'
   */
  movement;

  /**
   * @param {string} text
   */
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
