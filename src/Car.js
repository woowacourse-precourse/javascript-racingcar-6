import { Random } from "@woowacourse/mission-utils";

class Car {
  constructor(carName) {
    this.carName = carName;
  }

  moveForward() {
    let countForward = [];
    const randomValue = Random.pickNumberInRange(0, 9);
    if (randomValue > 4) {
      countForward.push("-");
    }
    return countForward;
  }
}

export default Car;
