import { Random, Console } from '@woowacourse/mission-utils';

export default class RacingCar {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  carMoveEvaluation() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) this.distance += 1;
    this.printRacingCarStatus();
  }

  printRacingCarStatus() {
    Console.print(`${this.name} : ${'-'.repeat(this.distance)}`);
  }
}
