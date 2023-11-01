import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../../constants/gameMessage.js"
import NameValid from "../../controller/valid/NameValid.js";
import TryNumberInput from "./TryNumberInput.js";
import ResultOutput from "../output/ResultOutput.js";

class CarNameInput {
  constructor() {
    this.nameValid = new NameValid();
    this.tryNumberInput = new TryNumberInput();
    this.resultOutput = new ResultOutput();
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
    this.resultOutput.winnerPrint(result);
  }
}

export default CarNameInput;
