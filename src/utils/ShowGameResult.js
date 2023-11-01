import { WINNER } from "../const/Messages";
import { Console } from "@woowacourse/mission-utils";

class ShowGameResult {
  constructor(carPositions) {
    this.carPositions = carPositions;
  }

  findWinner() {
    const maxPosition = Math.max(...Object.values(this.carPositions).map((pos) => pos.length));
    const winners = Object.entries(this.carPositions)
      .filter(([_, position]) => position.length === maxPosition)
      .map(([carName, _]) => carName);
    return winners;
  }

  printGameResult() {
    const winners = this.findWinner();
    Console.print(`${WINNER} : ${winners.join(", ")}`);
  }
}

export default ShowGameResult;
