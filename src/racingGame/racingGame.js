import { Console } from "@woowacourse/mission-utils";
import { GAMEMSG } from "../constants/message.js";
import {
  splitInputCarName,
  checkInputCarNameValidation,
  checkInputTryNumValidation,
} from "./utils/validation.js";

class RacingGame {
  async start() {
    await this.getCarName();
    await this.getTryNum();
  }

  async getCarName() {
    try {
      const inputCarName = await Console.readLineAsync(GAMEMSG.input_CarName);
      const carNameList = splitInputCarName(inputCarName);
      checkInputCarNameValidation(carNameList);
    } catch (error) {
      throw error;
    }
  }

  async getTryNum() {
    try {
      const inputTryNum = await Console.readLineAsync(GAMEMSG.input_tryNum);
      checkInputTryNumValidation(inputTryNum);
    } catch (error) {
      throw error;
    }
  }
}
export default RacingGame;
