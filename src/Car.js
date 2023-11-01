import { Console, MissionUtils } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  goForward() {
    let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position++;
    }
  }

  showPosition() {
    let dashPosition = '-'.repeat(this.position);
    Console.print(`${this.name} : ${dashPosition}`);
  }
}

export default Car;
