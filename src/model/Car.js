import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;
  #distance;

  constructor(carName) {
    this.#name = carName;
    this.#distance = 0;
  }
  getName() { return (this.#name); }
  getDistance() { return (this.#distance); }
}

export default Car;
