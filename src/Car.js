import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(carName) {
    this.carName = carName;
  }

  moveForward(countForward) {
    const randomValue = Random.pickNumberInRange(0, 9);
    if (randomValue >= 4) {
      countForward.push("-");
    }
    Console.print(`${this.carName} : ${countForward.join("")}`);
    return countForward;
  }
}

export default Car;
