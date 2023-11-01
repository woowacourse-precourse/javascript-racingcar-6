import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;
  #distance;

  constructor(carName) {
    this.#name = carName;
    this.#distance = 0;
  }
  oneStepForward() { this.#distance += Car.#oneOrZero(); }
  getName() { return (this.#name); }
  getDistance() { return (this.#distance); }
  static #oneOrZero() { return Random.pickNumberInRange(0, 9) > 3 ? 1 : 0; }
}

export default Car;
