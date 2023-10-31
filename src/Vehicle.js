import { Console } from '@woowacourse/mission-utils';

class Vehicle {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    this.position += 1;
  }

  printPosition() {
    Console.print(`${this.name} : ${'-'.repeat(this.position)}`);
  }
}

export default Vehicle;
