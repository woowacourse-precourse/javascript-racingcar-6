import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE } from "./Message.js";
import { validateCarNames, validateRound } from "./InputOutput.js";

class App {
  constructor() {
    this.carNames = [];
    this.winner = [];
    this.round = 0;
  }

  async play() {
    try {
      await this.getCarNames();
      await this.getRound();
    } catch (error) {
      throw new Error(error);
    }
  }

  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.CARNAME);
    this.carNames = input.split(",");
    validateCarNames(this.carNames);
  }

  async getRound() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.TRYCOUNT);
    this.round = String(input);
    validateRound(this.round);
  }
}

export default App;
