import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.position += 1;
    }
  }
}

export default Car;
