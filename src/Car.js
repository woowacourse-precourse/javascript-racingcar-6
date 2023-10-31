import { Console } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }
  getDistance() {
    return this.distance;
  }
  moveForward(distance) {
    this.distance += distance;
  }
  printPosition() {
    const dashes = "-".repeat(this.distance);
    Console.print(`${this.name} : ${dashes}\n`);
  }
}

export default Car;
