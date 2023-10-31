import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(carName) {
    this.name = carName;
    this.path = [];
  }

  drive() {
    const number = Random.pickNumberInRange(1, 9);

    if (number >= 4) {
      this.path.push("-");
    }
  }
}

export default Car;
