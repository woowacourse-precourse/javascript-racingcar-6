import { Random, Console } from '@woowacourse/mission-utils';

class Car {
  constructor(carName) {
    this.carName = carName;
    this.score = 0;
    this.state = [];
  }

  move() {
    const number = Random.pickNumberInRange(0, 9);
    if (number >= 4) {
      this.score++;
    }
    this.state.push('-'.repeat(this.score));
  }

  printState(index) {
    Console.print(this.carName + ' : ' + this.state[index]);
  }
}

export default Car;
