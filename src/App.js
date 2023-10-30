import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE } from "./Message.js";
import { validateCarNames, validateRound } from "./InputOutput.js";
import { checkMoving } from "./Racing.js";

class App {
  constructor() {
    this.carsInfo = {
      name: "",
      position: 0,
    };
    this.inputCarNames = [];
    this.winner = [];
    this.round = 0;
  }

  async play() {
    await this.getCarNames();
    this.makeCarsInfo();
    await this.getRound();
    checkMoving();
  }

  async getCarNames() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.CARNAME);
    this.inputCarNames = input.split(",");
    validateCarNames(this.inputCarNames);
  }

  makeCarsInfo() {
    this.inputCarNames.forEach((carNames) => {
      this.carsInfo.name = carNames;
      this.carsInfo.position = 0;
      console.log(this.carsInfo);
    });
  }

  async getRound() {
    const input = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.TRYCOUNT);
    this.round = String(input);
    validateRound(this.round);
  }
}

export default App;
