import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  playRound() {
    this.#moveOrStop();
    this.#printRoundResult();
  }

  #moveOrStop() {
    if (this.#isCarMoved()) {
      this.#distance += 1;
    }
  }

  #isCarMoved() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber < 4) return false;

    return true;
  }

  #printRoundResult() {
    Console.print(`${this.#name} : ${"-".repeat(this.#distance)}`);
  }

  static initializeCars(names) {
    return names.map(name => new Car(name));
  }
}

export default Car;
