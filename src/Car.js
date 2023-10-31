import { Console, Random } from "@woowacourse/mission-utils";

class Car {
  constructor(carName) {
    this.carName = carName;
  }

  moveForward(countForward) {
    const randomValue = Random.pickNumberInRange(0, 9);
    this.countForward = countForward;
    if (randomValue >= 4) {
      if (!this.countForward[this.carName])
        this.countForward[this.carName] = "-";
      else this.countForward[this.carName] += "-";
    }
    Console.print(`${this.carName} : ${this.countForward[this.carName] || ""}`);

    return this.countForward;
  }
}

export default Car;
