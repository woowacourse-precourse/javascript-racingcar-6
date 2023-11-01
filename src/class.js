import { Console, Random } from "@woowacourse/mission-utils";

export class Car {

  constructor(name) {
    this.name = name;
    this.length = 0;
  }

  tryMoveForward() {
    const num = Random.pickNumberInRange(0, 9);
    if(num>=4)  this.length++;
  }

  printCurrentPosition() {
    Console.print(`${this.name} : ${"-".repeat(this.length)}`);
  }
}