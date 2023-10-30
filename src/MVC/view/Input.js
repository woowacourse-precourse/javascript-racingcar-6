import { Console } from "@woowacourse/mission-utils";
import GAME_MESSAGE from "../Constants/gameMessage.js";
import TryValid from "../controller/TryValid.js";
import NameValid from "../controller/NameValid.js";
import RacingGame from "../model/RacingGame.js"

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
  }

  async tryNumber(nameSplit) {
    try {
      const number = await Console.readLineAsync(`${GAME_MESSAGE.tryNumber}`);
      this.tryValid.tryIsValid(number);
      this.racingGame.racing(nameSplit, number);
    } catch (error) {
      throw error;
    }
  }
}

export default Input;
