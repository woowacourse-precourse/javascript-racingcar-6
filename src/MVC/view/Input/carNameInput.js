import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../../Constants/gameMessage.js";
import nameValid from "../../controller/valid/nameValid.js";
import tryNumberInput from "./tryNumberInput.js";
import Output from "../output/resultOutput.js";

class Input {
  constructor() {
    this.nameValid = new nameValid();
    this.tryNumberInput = new tryNumberInput();
  }
  async carName() {
    let nameSplit;
    try {
      const userName = await Console.readLineAsync(`${GAME_MESSAGE.carName}`);
      nameSplit = this.nameValid.nameIsValid(userName);
    } catch (error) {
      throw error;
    }
    const result = await this.tryNumberInput.tryNumber(nameSplit);
    Output.winnerPrint(result);
    return;
  }
}

export default Input;
