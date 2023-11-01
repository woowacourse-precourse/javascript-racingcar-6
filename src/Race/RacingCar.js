import { MissionUtils } from "@woowacourse/mission-utils";
const { Random, Console } = MissionUtils;

class RacingCar {
  carNumberOfMove = [];
  winner = "";

  fullfillAdvanceRequirement(number) {
    if (number >= 4) {
      return true;
    }
    return false;
  }

  moveForward(i) {
    const number = Random.pickNumberInRange(0, 9);
    if (this.fullfillAdvanceRequirement(number)) {
      this.carNumberOfMove[i] += 1;
    }
  }

  printRacingState(userInput) {
    for (let i = 0; i < userInput.carNames.length; i++) {
      Console.print(
        `${userInput.carNames[i]} : ${"-".repeat(this.carNumberOfMove[i])}`
      );
    }
  }

  oneTryRacing(userInput) {
    for (let i = 0; i < userInput.carNames.length; i++) {
      this.moveForward(i);
    }

    this.printRacingState(userInput);
    Console.print("");
  }

  getFinalWinner(userInput) {
    const max = Math.max(...this.carNumberOfMove);
    const winners = userInput.carNames.filter(
      (name, index) => this.carNumberOfMove[index] === max
    );
    this.winner = winners.join(", ");
  }
  async resetToZero(userInput) {
    for (let i = 0; i < userInput.getCarName().length; i++) {
      this.carNumberOfMove[i] = 0;
    }
  }
  getWinnerName() {
    return this.winner;
  }
  getCarNumberOfMove() {
    return this.carNumberOfMove;
  }
}

export default RacingCar;
