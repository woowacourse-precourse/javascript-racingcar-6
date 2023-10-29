import { Console } from "@woowacourse/mission-utils";
import UserInputCarName from "./utils/UserInputCarName";
import { movingForwardCase } from "./utils/MovingForwardCase";
import { FORWARD_DASH } from "./const/Messages";
import ShowGameWinner from "./utils/ShowGameWinner";

class App {
  constructor() {
    this.carManager = new UserInputCarName();
    this.carPositions = {};
  }

  async play() {
    this.setupGame();
  }

  async setupGame() {
    await this.carManager.inputCarName();
    this.carManager.getCarName().forEach((carName) => {
      this.carPositions[carName] = "";
    });
    this.winnerUtils = new ShowGameWinner(this.carPositions);
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

  findWinner() {
    return this.winnerUtils.findWinner();
  }

  printGameResult() {
    return this.winnerUtils.printGameResult(this);
  }
}

export default App;
