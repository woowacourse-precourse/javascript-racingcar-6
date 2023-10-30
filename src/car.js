import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randomNumber = this.generateRandomNumbers();
    if (this.moreThanFour(randomNumber)) {
      this.position += 1;
    }
  }

  generateRandomNumbers() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }

  moreThanFour(randomNumber) {
    return randomNumber >= 4;
  }
}
export default Car;
