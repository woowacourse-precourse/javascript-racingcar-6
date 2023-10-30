import { Console } from "@woowacourse/mission-utils";
import User from "./User.js";
import CarMovementDecision from "./CarMovementDecision.js";
import { RESULT_MESSAGE } from "./utils/constants.js";

class RacingCarGame {
  #scoreBoard = {};

  async game() {
    await this.setupGame();
    this.printWinners();
  }

  async setupGame() {
    const user = new User();
    await user.inputCarNamesAndAttempts();

    user.getCarNames().forEach((carName) => {
      this.#scoreBoard[carName] = "";
    });

    const attempts = user.getAttempts();
    this.playGame(attempts);
  }

  playGame(totalAttempts) {
    const carMovementDecision = new CarMovementDecision();
    Console.print(`\n${RESULT_MESSAGE.EXECUTION_RESULT}`);
    for (let attempt = 0; attempt < totalAttempts; attempt++) {
      this.updateScoreBoard(carMovementDecision);
      this.printRoundScores();
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
    Object.keys(this.#scoreBoard).forEach((carName) => {
      Console.print(`${carName} : ${this.#scoreBoard[carName]}`);
    });
    Console.print("");
  }

  printWinners() {
    const carNames = Object.keys(this.#scoreBoard);

    const maxDistance = Math.max(
      ...carNames.map((carName) => this.#scoreBoard[carName].length)
    );

    const winners = carNames.filter(
      (carName) => this.#scoreBoard[carName].length === maxDistance
    );

    Console.print(`${RESULT_MESSAGE.WINNER} : ${winners.join(", ")}`);
  }
}

export default RacingCarGame;
