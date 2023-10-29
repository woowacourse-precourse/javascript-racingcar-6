import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.track = '';
  }

  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.track += '-';
    }
  }
}

export default Car;
