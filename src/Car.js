import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  moveForward() {
    this.move += 1;
  }

  displayMovement() {
    MissionUtils.Console.print(`${this.name} : ${"-".repeat(this.move)}`);
  }
}

export default Car;
