import { MissionUtils } from '@woowacourse/mission-utils';

class car {
  constructor(name) {
    this.name = name;
  }

  getRandomNumber() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
}
