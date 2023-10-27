import { Console } from "@woowacourse/mission-utils";
import CarNames from "./CarNames.js";

class App {
  constructor() {
    this.carNames = new CarNames();
  }
  async play() {
    const cars = await this.carNames.getCarNames();
  }
}

export default App;
