import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "./mvc/constants/gameMessage.js";
import NameValid from "./mvc/controller/valid/NameValid.js";
import TryNumberInput from "./mvc/view/input/TryNumberInput.js";
import resultOutput from "./mvc/view/output/ResultOutput.js";

class App {
  constructor() {
    this.nameValid = new NameValid();
    this.tryNumberInput = new TryNumberInput();
  }
  async play() {
    let nameSplit;
    try {
      const userName = await Console.readLineAsync(`${GAME_MESSAGE.carName}`);
      nameSplit = this.nameValid.nameIsValid(userName);
    } catch (error) {
      throw error;
    }
    const result = await this.tryNumberInput.tryNumber(nameSplit);
    resultOutput.winnerPrint(result);
    return;
  }
}

export default App;

