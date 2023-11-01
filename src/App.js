import InputView from "./view/InputView";
import OutputView from "./view/OutputView";

class App {
  outputView;

  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async play() {
    this.outputView.printGameStartMessage();
    await this.outputView.printCarName();
    await this.outputView.printNumberAttempts();
    this.outputView.printExecutionResult();
  }
}


export default App;
