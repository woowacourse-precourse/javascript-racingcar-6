import {MissionUtils} from '@woowacourse/mission-utils';
import Car from './Car.js';

class Computer {
  #carList;
  #round;

  constructor() {
    this.#carList = [];
    this.#round = 0;
  }

  set round(input) {
    if (!Number.isInteger(input) || input <= 0) {
      throw new Error('[ERROR] 0보다 큰 정수가 아님');
    }

    this.#round = input;
  }

  get round() {
    return this.#round;
  }

  get carList() {
    return this.#carList;
  }

  pushCarList(input) {
    const data = input.split(',');

    data.forEach((e) => {
      let car = new Car();

      car.name = e;
      this.#carList.push(car);
    });
  }
}

export default Computer;
