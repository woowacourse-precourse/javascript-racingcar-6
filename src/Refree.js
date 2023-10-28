import { Random } from '@woowacourse/mission-utils';
import Car from './Car.js';

class Refree {
  #carList = new Map();

  registerCars(carNames) {
    carNames.forEach((car) => this.#carList.set(car, new Car(car)));
  }

  moveCars() {
    this.#carList.forEach((car) => {
      const randomNumber = Random.pickNumberInRange(0, 9);
      if (randomNumber >= 4) car.move(1);
      if (randomNumber < 4) car.stop();
    });
  }

  getRcordList() {
    const result = [];
    this.#carList.forEach((carInstance) => result.push(carInstance.record()));
    return result;
  }

  getWinner() {
    const resultList = this.getRcordList();
    const max = Math.max(...resultList.map(([_, position]) => position));
    const winner = resultList.filter(([_, position]) => position === max).map(([name, _]) => name);
    return winner;
  }
}

export default Refree;
