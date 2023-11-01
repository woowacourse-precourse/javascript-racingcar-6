import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
  }

  drive() {
    let step = "";
    let number = Random.pickNumberInRange(0, 9);
    if (number >= 4) step += "-";
    return step;
  }
}

export default Car;
