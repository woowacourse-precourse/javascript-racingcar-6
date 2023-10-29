import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from '../util/Constant.js';

class CarGame {
  checkPosition(carMap, attempts) {
    carMap.forEach((_, carName) => {
      carMap.set(carName, this.getForwardCount(Number(attempts)));
    });
    return carMap;
  }

  getForwardCount(attempts) {
    let count = 0;
    for (let i = 0; i < attempts; i++) {
      count = this.getRandomNumber(count);
    }
    return count;
  }

  getRandomNumber(count) {
    const randomValue = Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
    if (randomValue >= NUMBER.RANDOM) {
      count += 1;
    }
    return count;
  }
}

export default CarGame;
