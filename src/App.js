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
    await this.setupGame();
    await this.playRound();
    this.showResult();
  }

  async setupGame() {
    this.carPositions = await this.carManager.setupCarPositions();
    this.rounds = await this.roundManager.inputRounds();
    this.gameResult = new ShowGameResult(this.carPositions);
    this.roundLog = new ShowRoundLog(this.carPositions);
  }

  async playRound() {
    await this.roundLog.printAllRoundLog();
  }

  showResult() {
    this.gameResult.printGameResult();
  }
}

export default App;
