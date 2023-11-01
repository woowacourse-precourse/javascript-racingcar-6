import { Random, Console } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      this.position++;
    }
  }

  printPosition() {
    Console.print(`${this.name} : ${'-'.repeat(this.position)}`);
  }
}

export default Car;
