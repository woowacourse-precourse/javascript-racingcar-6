import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  static generateRandomValue() {
    return Random.pickNumberInRange(0, 9);
  }

  getName() {
    return this.name;
  }

  getPosition() {
    return this.position;
  }

  calculatePosition() {
    const randomValue = Car.generateRandomValue();
    if (randomValue >= 4) {
      this.position++;
    }
  }

  generateResultMessage() {
    let resultMessage = this.name + " : ";
    for (let i = 0; i < this.position; i++) {
      resultMessage += "-";
    }
    return resultMessage;
  }

  isFasterThan(position) {
    if (this.position > position) {
      return true;
    }
    return false;
  }

  isSameAs(position) {
    if (this.position === position) {
      return true;
    }
    return false;
  }
}

export default Car;
