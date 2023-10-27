import { Console } from "@woowacourse/mission-utils";
import { GAMEMSG } from "../constants/message.js";
import {
  splitInputCarName,
  checkInputCarNameValidation,
} from "./utils/validation.js";

class RacingGame {
  async start() {
    this.getCarName();
  }

  async getCarName() {
    let inputCarName;
    try {
      inputCarName = await Console.readLineAsync(GAMEMSG.inputCarName);
      const carNameList = splitInputCarName(inputCarName);
      checkInputCarNameValidation(carNameList);
    } catch (error) {
      throw error;
    }
  }
}
export default RacingGame;
