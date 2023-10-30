import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  generateRandomNumbers() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  moreThanFour(randomNumber) {
    return randomNumber >= 4;
  }
}
