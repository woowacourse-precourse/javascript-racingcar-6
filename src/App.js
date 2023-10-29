import CustomError from "./core/CustomError.js";
import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";
import GameViewModel from "./viewModel/GameViewModel.js";

class App {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();

    this.gameViewModel = new GameViewModel();
  }

  async play() {
    try {
      const names = await this.inputView.inputCarNames();

      this.gameViewModel.addCars(names);

      const tryCount = await this.inputView.inputTryCount();

      this.gameViewModel.setTryCount(tryCount);

      for (let i = 0; i < tryCount; i++) {
        this.gameViewModel.racing();
      }

      const gameStatus = this.gameViewModel.getStatus();

      this.outputView.printResultStatus(gameStatus);

      const winners = this.gameViewModel.getWinner();

      this.outputView.printWinner(winners);
    } catch (error) {
      throw new CustomError(error.message);
    }
  }
}

export default App;
