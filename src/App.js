import { Console } from "@woowacourse/mission-utils";

import InputView from "./view/InputView";
import OutputView from "./view/OutputView";
import { CarNameGenerator } from "./utils/CarNameGenerator";

class App {
  outputView;

  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async play() {
    this.outputView.printGameStartMessage();
    this.outputView.printCarName();
    
  }
}


export default App;
