import { WINNER } from "../const/Messages";
import { Console } from "@woowacourse/mission-utils";

class ShowGameResult {
  constructor(carPositions) {
    this.carPositions = carPositions;
  }

  findWinner(rounds) {
    return Object.entries(this.carPositions)
      .filter(([_, position]) => position.length === rounds)
      .map(([carName, _]) => carName);
  }

  printGameResult(rounds) {
    const winners = this.findWinner(rounds);
    Console.print(`${WINNER} : ${winners.join(", ")}`);
  }
}

export default ShowGameResult;
