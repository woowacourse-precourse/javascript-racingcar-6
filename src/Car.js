import { Random } from '@woowacourse/mission-utils';

class Car {
  #name = '';
  #path = '';

  constructor(name) {
    this.#name = name;
  }

  move() {
    const value = Random.pickNumberInRange(0, 9);
    if (Number(value) < 4) {
      return;
    }

    this.#path += '-';
  }

  getName() {
    return this.#name;
  }

  getPath() {
    return this.#path;
  }
}

export default Car;
