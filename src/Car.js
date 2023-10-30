import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  generateRandomValue() {
    return Random.pickNumberInRange(0, 9);
  }

  calculatePosition() {
    const randomValue = this.generateRandomValue();
    if (randomValue >= 4) {
      this.position++;
    }
  }
}

export default Car;
