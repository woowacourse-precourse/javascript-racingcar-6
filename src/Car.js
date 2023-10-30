import { MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = '';
  }
  goForward() {
    const STOP =3;
    const number = MissionUtils.Random.pickNumberInRange(0, 9);
    if (number > STOP) {
      this.distance += '-';
    }
    MissionUtils.Console.print(`${this.name} : ${this.distance}`);
  }
}
module.exports = Car;
export default Car;
