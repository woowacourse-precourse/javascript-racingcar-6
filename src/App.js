import { Console } from "@woowacourse/mission-utils";
import CarNameInput from "./CarNameInput.js";

class App {
  constructor() {
    this.carNames = new CarNameInput();
  }
  async play() {
    const cars = await this.carNames.getCarNames();
  }
}

export default App;
