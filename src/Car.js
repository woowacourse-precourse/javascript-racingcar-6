import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  // TODO: Mission 3: 자동차 이동 로직 메서드입니다.
  move() {
    const randomValue = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      this.position += 1;
    }
  }
}

export default Car;
