import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  drive() {
    let number = Random.pickNumberInRange(0, 9);
    if (number >= 4) this.step++;
    return this.step;
  }
}

export default Car;
