import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  #name = "";
  #moveCount = 0;

  constructor(name) {
    this.#name = name;
  }

  canMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    return randomNumber >= 4;
  }

  move() {
    if (this.canMove()) {
      this.#moveCount += 1;
    }
  }

  print() {
    Console.print(`${this.#name} : ${"-" * this.#moveCount}`);
  }
}

export default Car;
