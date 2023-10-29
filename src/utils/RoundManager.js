import { Console } from "@woowacourse/mission-utils";
import { movingForwardCase } from "./utils/MovingForwardCase";
import { FORWARD_DASH } from "./const/Messages";

class RoundManager {
  constructor(carPositions) {
    this.carPositions = carPositions;
  }

  playRound() {
    Object.keys(this.carPositions).forEach((carName) => {
      if (movingForwardCase()) {
        this.carPositions[carName] += FORWARD_DASH;
        Console.print(FORWARD_DASH);
      }
    });
  }

  printRoundResult() {
    Object.entries(this.carPositions).forEach(([carName, position]) => {
      Console.print(`${carName} : ${position}`);
    });
    Console.print();
  }
}

export default RoundManager;
