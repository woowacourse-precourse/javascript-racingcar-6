import { Console } from "@woowacourse/mission-utils";

class Car {
  #name = "";
  #moveCount = 0;

  constructor(name) {
    this.#name = name;
  }

  move() {
    this.#moveCount += 1;
  }

  print() {
    Console.print(`${this.#name} : ${"-" * this.#moveCount}`);
  }
}

export default Car;
