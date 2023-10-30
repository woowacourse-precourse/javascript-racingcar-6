import { Console } from "@woowacourse/mission-utils";
import validateNameLength from "./validation/validateNameLength.js";

class App {
  constructor() {
    this.carNamesList = [];
  }

  async play() {
    await this.enterGameBaseSetting();
  }

  async enterGameBaseSetting() {
    await this.enterCarNames();
    this.enterRoundCount();
  }

  async enterCarNames() {
    try {
      const userInput = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
      );
      this.carNamesList = userInput.split(",");

      validateNameLength(this.carNamesList, 5);
    } catch (error) {
      throw new Error(`[ERROR] ${error}`);
    }
  }

  enterRoundCount() {}

  printRaceStatus() {}

  getWinners() {}

  printGameResults() {}
}

export default App;
