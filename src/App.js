import { Console } from "@woowacourse/mission-utils";
import CarNameInput from "./CarNameInput.js";
import CarMoveCount from "./CarMoveCount.js";

class App {
  constructor() {
    this.carNames = new CarNameInput();
    this.moveCount = new CarMoveCount();
  }
  async play() {
    const cars = await this.carNames.getCarNames();
    const moveCount = await this.moveCount.getMoveCount();
  }
}

export default App;
