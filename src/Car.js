import { Random, Console } from '@woowacourse/mission-utils';

class Car {
  #position;

  #name;

  #positionString;

  constructor(name) {
    this.#position = 0;
    this.#name = name;
    this.#positionString = '';
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }

  tryMove() {
    const randomNum = Random.pickNumberInRange(0, 9);
    if (randomNum >= 4) {
      this.#position += 1;
      this.#positionString += '-';
    }
  }

  printPosition() {
    Console.print(`${this.#name} : ${this.#positionString}`);
  }
}

export default Car;
