import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  advanceCar() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.moveCar();
    }
  }

  moveCar() {
    this.move += 1;
  }

  getName() {
    return this.name;
  }

  getMove() {
    return this.move;
  }
}

export default Car;
