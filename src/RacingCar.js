import { Random } from '@woowacourse/mission-utils';

export default class RacingCar {
  static RAND_START = 0;
  static RAND_END = 9;

  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  moveForward() {
    const randomNumber = RacingCar.getRandomNumber(
      RacingCar.RAND_START,
      RacingCar.RAND_END
    );

    if (randomNumber >= 4) this.distance += 1;
  }

  static getRandomNumber(start, end) {
    return Random.pickNumberInRange(start, end);
  }
}
