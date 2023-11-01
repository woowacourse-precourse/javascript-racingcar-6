import { Random } from '@woowacourse/mission-utils';

export class Car {
  #name = '';
  #position = 0;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  getItem() {
    return { name: this.#name, position: this.#position };
  }

  move() {
    const randomNumber = Random.pickNumberInRange(1, 9);
    if (randomNumber >= 4) {
      this.#position++;
    }
  }
}
