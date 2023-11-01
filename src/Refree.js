import { Random } from '@woowacourse/mission-utils';
import { RANDOM_NUMBERS } from './constants/randomNumber.js';

import Car from './Car.js';
import { CAR_MOVE } from './constants/racingGame.js';

class Refree {
  #carRegistry = new Map();

  registerCars(carNames) {
    carNames.forEach((carName) => this.#carRegistry.set(carName, new Car(carName)));
  }

  moveCars() {
    this.#carRegistry.forEach((carInstance) => {
      const randomNumber = Random.pickNumberInRange(RANDOM_NUMBERS.MIN, RANDOM_NUMBERS.MAX);
      if (randomNumber >= CAR_MOVE.CONDITION) carInstance.move(CAR_MOVE.DISTANCE);
      if (randomNumber < CAR_MOVE.CONDITION) carInstance.stop();
    });
  }

  getRecordResultList() {
    const result = [];
    this.#carRegistry.forEach((carInstance) => result.push(carInstance.record()));
    return result;
  }

  getWinner() {
    const resultList = this.getRecordResultList();
    const maxPosition = Math.max(...resultList.map(([_, position]) => position));
    const winner = resultList
      .filter(([_, position]) => position === maxPosition)
      .map(([name, _]) => name);
    return winner;
  }
}

export default Refree;
