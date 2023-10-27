import { Console } from "@woowacourse/mission-utils";
import { GAMEMSG } from "../constants/message.js";
import { splitInputCarName } from "./utils/validation.js";

class RacingGame {
  async start() {
    this.getCarName();
  }

  async getCarName() {
    let inputCarName;
    try {
      inputCarName = await Console.readLineAsync(GAMEMSG.inputCarName);
      splitInputCarName(inputCarName);
      Console.print(splitInputCarName(inputCarName));
    } catch (error) {
      throw error;
    }
  }
}
export default RacingGame;
