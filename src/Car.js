import { Console } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.carPosition = 0;
  }
  moveForward() {
    this.carPosition += 1;
  }
  printPosition() {
    const dashes = "-".repeat(this.carPosition);
    Console.print(`${this.name} : ${dashes}`);
  }
}

export default Car;
