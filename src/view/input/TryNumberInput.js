import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../../constants/gameMessage.js";
import TryValid from "../../controller/valid/TryValid.js";
import RacingGame from "../../model/RacingGame.js";

class TryNumberInput {
  constructor() {
    this.tryValid = new TryValid();
    this.racingGame = new RacingGame();
  }
  async tryNumber(nameSplit) {
    let number;
    try {
      number = await Console.readLineAsync(`${GAME_MESSAGE.tryNumber}`);
      this.tryValid.tryIsValid(number);
    } catch (error) {
      throw error;
    }
    return this.racingGame.racing(nameSplit, number);
  }
}

export default TryNumberInput;
