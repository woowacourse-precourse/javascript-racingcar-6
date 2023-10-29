import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Refree {
  #carRegistry = new Map();

  registerCars(carNames) {
    carNames.forEach((car) => this.#carRegistry.set(car, new Car(car)));
  }

  moveCars() {
    this.#carRegistry.forEach((carInstance) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) carInstance.move(1);
      if (randomNumber < 4) carInstance.stop();
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
