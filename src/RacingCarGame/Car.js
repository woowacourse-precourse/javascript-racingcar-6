import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.movingDistance = 0;
  }

  move() {
    const shouldMove = this.validateMove();
    if (shouldMove) {
      this.movingDistance++;
    }
  }

  validateMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }
}

export default Car;