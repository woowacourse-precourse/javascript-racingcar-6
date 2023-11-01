import { Random, Console } from '@woowacourse/mission-utils';

export default class RacingCar {
  static RAND_START = 0;

  static RAND_END = 9;

  static NUM_CENTER = 4;

  static MOVE_DISTANCE = 1;

  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  moveForward() {
    const randomNumber = Random.pickNumberInRange(RacingCar.RAND_START, RacingCar.RAND_END);
    if (randomNumber >= RacingCar.NUM_CENTER) this.distance += RacingCar.MOVE_DISTANCE;
  }

  printDistance() {
    Console.print(`${this.name} : ${'-'.repeat(this.distance)}`);
  }
}
