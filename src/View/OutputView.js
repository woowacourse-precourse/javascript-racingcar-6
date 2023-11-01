import { Console } from "@woowacourse/mission-utils";
import { GUIDE_MESSAGE } from "../Constant/Constant";

class OutputView {
  static PrintWinner(winner) {
    Console.print(`${GUIDE_MESSAGE.WINNER_RESULT} : ${winner.join(", ")}`);
  }

  static PrintGameStart() {
    Console.print(GUIDE_MESSAGE.GAME_START);
  }

  static PrintMoveStat(cars, curstat) {
    for (let i = 0; i < cars.length; ++i) {
      Console.print(`${cars[i]} : ${this.printStatProgress(curstat[i])}\n`);
    }
  }

  static printStatProgress(number) {
    let progress = "";
    for (let i = 0; i < number; ++i) {
      progress += GUIDE_MESSAGE.MOVE_MARKING;
    }
    return progress;
  }
}

export default OutputView;
