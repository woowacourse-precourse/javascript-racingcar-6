import { Console } from "@woowacourse/mission-utils";

import OutputView from "./view/OutputView";
import { CarNameGenerator } from "./utils/CarNameGenerator";

class App {

  constructor() {
    this.inputView = new InputView();
  }

  async play() {
    this.outputView.printGameStartMessage();
    CarNameGenerator();
  }
}


export default App;
