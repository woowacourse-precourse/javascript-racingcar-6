import { Console, Random } from "@woowacourse/mission-utils";

class Car {
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

  static printWinners(cars) {
    const maxDistance = Math.max(...cars.map((car) => car.distance));
    const winners = cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  static initializeCars(names) {
    return names.map((name) => new Car(name));
  }
}

export default Car;
