import { Console } from "@woowacourse/mission-utils";
import UserInputCarName from "./utils/UserInputCarName";
import ShowGameResult from "./utils/ShowGameResult";
import RoundManager from "./utils/RoundManager";

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
    this.gameResult = new ShowGameResult(this.carPositions);
    this.roundManager = new RoundManager(this.carPositions);
  }

  playRound() {
    this.roundManager.playRound();
  }

  printRoundResult() {
    this.roundManager.printRoundResult();
  }

  findWinner() {
    return this.gameResult.findWinner();
  }

  printGameResult() {
    return this.gameResult.printWinner(this);
  }
}

export default App;
