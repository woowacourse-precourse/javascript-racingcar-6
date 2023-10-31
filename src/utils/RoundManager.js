import { Console } from "@woowacourse/mission-utils";
import { movingForwardCase } from "./MovingForwardCase";
import { FORWARD_DASH } from "../const/Messages";

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
    this.printRoundResult();
  }

  printRoundResult() {
    Object.entries(this.carPositions).forEach(([carName, position]) => {
      Console.print(`${carName} : ${position}`);
    });
    Console.print(); // 각 라운드 별 빈줄 표시
  }
}

export default RoundManager;
