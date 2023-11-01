import { MissionUtils } from "@woowacourse/mission-utils";
import UserInput from "../Input/UserInput";
const { Random, Console } = MissionUtils;

class RacingCar {
  #carNumberOfMove = [];
  #winner = "";

  #userInput = new UserInput();
  carNames = this.#userInput.getCarName();

  moveForward() {
    for (let i = 0; i < this.carNames.length; i++) {
      const number = Random.pickNumberInRange(0, 9);
      if (number >= 4) {
        this.#carNumberOfMove[i] += 1;
      }
      continue;
    }
  }

  printRacingState() {
    for (let i = 0; i < this.carNames.length; i++) {
      Console.print(
        `${this.carNames[i]} : ${"-".repeat(this.#carNumberOfMove[i])}`
      );
    }
    Console.print("");
  }

  getFinalWinner() {
    const max = Math.max(...this.#carNumberOfMove);
    const winners = this.carNames.filter(
      (name, index) => this.#carNumberOfMove[index] === max
    );
    this.#winner = winners.join(", ");
  }
  resetToZero() {
    for (let i = 0; i < this.#userInput.getCarName().length; i++) {
      this.#carNumberOfMove[i] = 0;
    }
  }
  getWinnerName() {
    return this.#winner;
  }
}

export default RacingCar;
