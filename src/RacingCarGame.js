import { Console } from "@woowacourse/mission-utils";
import User from "./User.js";
import CarMovementDecision from "./CarMovementDecision.js";

class RacingCarGame {
  #scoreBoard = {};

  async game() {
    await this.setupGame();
    this.printRoundScores();
  }

  async setupGame() {
    const user = new User();
    await user.inputCarsNameAndAttempts();

    user.getCarsName().forEach((carName) => {
      this.#scoreBoard[carName] = "";
    });

    const attempts = user.getAttempts();
    this.playGame(attempts);
  }

  playGame(totalAttempts) {
    const carMovementDecision = new CarMovementDecision();
    for (let attempt = 0; attempt < totalAttempts; attempt++) {
      this.updateScoreBoard(carMovementDecision);
    }
  }

  updateScoreBoard(carMovementDecision) {
    Object.keys(this.#scoreBoard).forEach((carName) => {
      if (carMovementDecision.canMove()) {
        this.#scoreBoard[carName] += "-";
      }
    });
  }

  printRoundScores() {
    Console.print(this.#scoreBoard);
  }
}

export default RacingCarGame;
