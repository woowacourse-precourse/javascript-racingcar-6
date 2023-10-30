import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../Constants/gameMessage.js";
import TryValid from "../controller/valid/TryValid.js";
import NameValid from "../controller/valid/NameValid.js";
import RacingGame from "../model/RacingGame.js"
import Output from "./Output.js";

class Input {
  constructor() {
    this.tryValid = new TryValid();
    this.nameValid = new NameValid();
    this.racingGame = new RacingGame();
  }
  async carName() {
    try {
      const userName = await Console.readLineAsync(`${GAME_MESSAGE.carName}`);
      const nameSplit = this.nameValid.nameIsValid(userName);
      this.tryNumber(nameSplit);
    } catch (error) {
      throw error;
    }
    return;
  }

  async tryNumber(nameSplit) {
    try {
      const number = await Console.readLineAsync(`${GAME_MESSAGE.tryNumber}`);
      this.tryValid.tryIsValid(number);
      const result = this.racingGame.racing(nameSplit, number);
      Output.winnerPrint(result);
    } catch (error) {
      throw error;
    }
  }
}

export default Input;
