import { Console } from "@woowacourse/mission-utils";
import User from "./User.js";
import CarMovementDecision from "./CarMovementDecision.js";

class RacingCarGame {
  #scoreBoard = {};

  async game() {
    await this.setupGame();
  }

  async setupGame() {
    const user = new User();
    await user.inputCarsName();

    user.getCarsName().forEach((carName) => {
      this.#scoreBoard[carName] = 0;
    });
    Console.print(this.#scoreBoard);
  }
}

export default RacingCarGame;
