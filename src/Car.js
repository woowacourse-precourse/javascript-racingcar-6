import { MissionUtils } from '@woowacourse/mission-utils';

export default class Car {
  constructor(carName) {
    this.name = carName;
    this.forwardCount = 0;
  }

  moveCar() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber > 3) {
      this.forwardCount += 1;
    }
  }
}
