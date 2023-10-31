import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from '../utils/Constant.js';

class CarRace {
  checkPosition(carPosition, attempts) {
    carPosition.forEach((_, carName) => {
      carPosition.set(carName, this.getForwardCount(Number(attempts)));
    });
    return carPosition;
  }

  getForwardCount(attempts) {
    let count = 0;
    for (let i = 0; i < attempts; i += 1) {
      count = this.gainPower(count);
    }
    return count;
  }

  gainPower(count) {
    const power = Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
    if (power >= NUMBER.RANDOM) {
      count += 1;
    }
    return count;
  }
}

export default CarRace;
