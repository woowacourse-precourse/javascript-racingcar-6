import { Random, Console } from '@woowacourse/mission-utils';

class Car {
  #position;

  #name;

  constructor(name) {
    this.#position = 0;
    this.#name = name;
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }

  tryMove() {
    const randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) this.#position += 1;
  }

  printPosition() {
    Console.print(`${this.#name} : ${'-'.repeat(this.#position)}`);
  }
}

export default Car;
