import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    if (name.length > 5) {
      throw new Error('[ERROR] 자동차의 이름은 5글자를 초과할 수 없습니다.');
    }
    this.name = name;
    this.distance = 0;
  }

  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.distance++;
    }
  }

  getDistance() {
    return '-'.repeat(this.distance);
  }
}

export default Car;
