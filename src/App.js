import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE } from "./Message.js";
import { validateCarNames, validateRound } from "./Validate.js";
import { findWinner, positionHandleIterator } from "./Racing.js";
class App {
  constructor() {
    this.carsArr = [];
    this.inputCarNames = [];
    this.winner = [];
    this.round = 0;
  }

  async play() {
    await this.getCarNames();
    this.makeCarsInfo();
    await this.getRound();
    positionHandleIterator(this.carsArr, this.round);
    findWinner(this.carsArr);
  }

  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.CARNAME);
    this.inputCarNames = input.split(",");
    validateCarNames(this.inputCarNames);
  }

  makeCarsInfo() {
    this.inputCarNames.forEach((carName) => {
      const carsInfo = {
        name: carName,
        position: 0,
      };
      this.carsArr.push(carsInfo);
    });
  }

  async getRound() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.TRYCOUNT);
    this.round = String(input);
    validateRound(this.round);
  }
}

export default App;
