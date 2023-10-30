import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = '';
  }
  goForward() {
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    if (number > 3) {
      this.distance += '-';
    }
    MissionUtils.Console.print(`${this.name} : ${this.distance}`);
  }
  
}

export default Car;
