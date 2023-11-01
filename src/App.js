import { Console } from "@woowacourse/mission-utils";
import UserInputCarName from "./utils/UserInputCarName";
import ShowGameResult from "./utils/ShowGameResult";
import ShowRoundLog from "./utils/ShowRoundLog";
import UserInputRound from "./utils/UserInputRound";

class App {
  constructor() {
    this.carManager = new UserInputCarName();
    this.roundManager = new UserInputRound();
  }

  async play() {
    try {
      await this.setupGame();
      await this.playRound();
    } catch (error) {
      this.endGame();
      Console.print(error.message);
      return Promise.reject(error);
    }
  }

  async setupGame() {
    this.carPositions = await this.carManager.setupCarPositions();
    this.userRounds = await this.roundManager.inputRounds();
    this.rounds = await this.roundManager.getRounds();
    this.gameResult = new ShowGameResult(this.carPositions);
    this.roundLog = new ShowRoundLog(this.carPositions);
  }

  async playRound() {
    for (let i = 0; i < this.rounds; i++) {
      await this.roundLog.printAllRoundLog();
    }
    this.showResult();
    this.endGame();
  }

  showResult() {
    this.gameResult.printGameResult();
  }

  endGame() {
    return;
  }
}

export default App;
