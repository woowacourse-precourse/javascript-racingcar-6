import { Random } from "@woowacourse/mission-utils";
import { AfterMoveMessage } from "./Messages/Message";

class Car {
  constructor(name) {
    this.name = name;
    this.countMove = 0;
    this.showMove = "";
  }

  move() {
    const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
    if (RANDOM_NUMBER >= 4) {
      this.countMove += 1;
      this.showMove += "-";
    }
    AfterMoveMessage(this.name, this.showMove);
  }
}

export default Car;
