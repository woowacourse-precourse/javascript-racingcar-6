import { Random } from '@woowacourse/mission-utils';
import Car from './Car';

class User {
  static MIN_ACCELERATE_POWER = 0;

  static MAX_ACCELERATE_POWER = 9;

  #name;

  #car;

  constructor(name) {
    this.#name = name;
    this.#car = new Car();
  }

  getName() {
    return this.#name;
  }

  getCar() {
    return this.#car;
  }

  accelerate() {
    const power = Random.pickNumberInRange(User.MIN_ACCELERATE_POWER, User.MAX_ACCELERATE_POWER);
    this.#car.move(power);
  }
}

export default User;
