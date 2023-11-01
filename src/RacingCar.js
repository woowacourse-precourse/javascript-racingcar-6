import { Console, Random } from "@woowacourse/mission-utils";

class RacingCar {
  #name;
  #distance;

  constructor(name) {
    this.#name = name;
    this.#distance = 0;
  }

  get name() {
    return this.#name;
  }

  get distance() {
    return this.#distance;
  }

  /**
   * Use only in test code
   */
  set distance(distance) {
    this.#distance = distance;
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
    return names.map((name) => new RacingCar(name));
  }
}

export default RacingCar;
