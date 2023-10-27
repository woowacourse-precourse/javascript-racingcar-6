import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from './Message';

class Car {
  name = '';

  movement = [];

  constructor(text) {
    this.name = text;
  }

  handleMovement() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) this.movement.push(MESSAGE.movement);
  }
}

export default Car;
