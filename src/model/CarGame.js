import { Random } from '@woowacourse/mission-utils';
import { NUMBER } from '../util/Constant.js';

class CarGame {
  checkPosition(carMap, attempts) {
    carMap.forEach((_, carName) => {
      carMap.set(carName, this.getRandomNumber(Number(attempts)));
    });
    return carMap;
  }

  getRandomNumber(attempts) {
    let count = 0;
    for (let i = 0; i < attempts; i++) {
      const randomValue = Random.pickNumberInRange(NUMBER.MIN, NUMBER.MAX);
      if (randomValue >= NUMBER.RANDOM) {
        count += 1;
      }
    }
    return count;
  }
}

export default CarGame;
