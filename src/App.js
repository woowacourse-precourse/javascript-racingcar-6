import { Console, Random } from "@woowacourse/mission-utils";
const InputError = require("./lib/utils/error.js");
const { GAME_MESSAGE } = require("./lib/constants/message.js");

class App {
  constructor() {
    this.Error = new InputError();
  }

  async play() {
    this.playGame();
  }

  async playGame() {
    const carNameInput = await Console.readLineAsync(
      GAME_MESSAGE.CARNAME_INPUT
    );
    const carNameInputList = [...carNameInput.split(",")];
    this.Error.validateCarNameInput(carNameInputList);

    const tryCount = await Console.readLineAsync(GAME_MESSAGE.COUNT_INPUT);
    this.Error.validateCountInput(tryCount);
  }
}

export default App;
