import { GAME_RESULT, WINNER } from "../const/Messages";
import { Console } from "@woowacourse/mission-utils";

class showGameResult {
  constructor(carPositions) {
    this.carPositions = carPositions;
  }

  findWinner() {
    const maxPosition = Math.max(...Object.values(this.carPositions).map((pos) => pos.length));
    return Object.entries(this.carPositions)
      .filter(([_, position]) => position.length === maxPosition)
      .map(([carName, _]) => carName);
  }

  printGameResult(carGame) {
    Console.print(GAME_RESULT);
    carGame.printRoundResult();
    const winners = this.findWinner();
    Console.print(`${WINNER} : ${winners.join(", ")}`);
  }
}

export default showGameResult;
