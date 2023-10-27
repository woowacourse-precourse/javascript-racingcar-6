import { Console } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }
  moveForward(distance) {
    this.distance + distance;
  }
  printPosition() {
    const dashes = "-".repeat(this.distance);
    Console.print(dashes);
  }
}

export default Car;
