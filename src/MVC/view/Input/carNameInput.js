import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../../Constants/gameMessage.js";
import nameValid from "../../controller/valid/nameValid.js";
import TryNumberInput from "./tryNumberInput.js";
import resultOutput from "../output/resultOutput.js";

class CarNameInput {
  constructor() {
    this.nameValid = new nameValid();
    this.tryNumberInput = new TryNumberInput();
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
    resultOutput.winnerPrint(result);
  }
}

export default CarNameInput;
