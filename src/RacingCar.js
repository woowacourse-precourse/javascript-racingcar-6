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

  static playGame(racingCars, movementCount) {
    Console.print("\n실행 결과");

    Array.from({ length: movementCount }, () => {
      racingCars.forEach((racingCar) => {
        racingCar.playRound();
      });
      Console.print("");
    });

    this.printWinners(racingCars);
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

  static printWinners(racingCars) {
    const maxDistance = Math.max(
      ...racingCars.map((racingCar) => racingCar.distance)
    );
    
    const winners = racingCars
      .filter((racingCar) => racingCar.distance === maxDistance)
      .map((racingCar) => racingCar.name);

    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  static initializeCars(names) {
    return names.map((name) => new RacingCar(name));
  }
}

export default RacingCar;
