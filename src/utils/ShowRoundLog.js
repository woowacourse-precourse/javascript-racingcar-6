import { Console } from "@woowacourse/mission-utils";
import { movingForwardCase } from "./MovingForwardCase";
import { FORWARD_DASH, PLAY_LOG } from "../const/Messages";

class ShowRoundLog {
  constructor(carPositions) {
    this.carPositions = carPositions;
  }

  printAllRoundLog() {
    Console.print(PLAY_LOG);
    this.printForwardDash();
  }

  printForwardDash() {
    Object.keys(this.carPositions).forEach((carName) => {
      if (movingForwardCase()) {
        this.carPositions[carName] += FORWARD_DASH;
      }
    });
    this.printEachCarPosition();
  }

  printEachCarPosition() {
    Object.entries(this.carPositions).forEach(([carName, position]) => {
      Console.print(`${carName} : ${position}`);
    });
    Console.print("");
  }
}

export default ShowRoundLog;
