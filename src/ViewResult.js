// racingcar.js
import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = '';
  }

  isValidName() {
    return this.name.length > 0 && this.name.length <= 5;
  }

  move() { // 차량의 위치를 - 로 표시하는 구문
    const RANDOMNUMBER = MissionUtils.Random.pickNumberInRange(1, 9);
    if (RANDOMNUMBER >= 4) {
      this.position += '-';
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}

export default Car;
