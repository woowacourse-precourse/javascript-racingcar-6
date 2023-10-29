import CarNameManager from "./UserInputCarName";
import { movingForwardCase } from "./MovingForwardCase";
import { FORWARD_DASH, WINNER, GAME_RESULT } from "../const/Messages";

class playGame {
  constructor() {
    this.carManager = new CarNameManager();
    this.carPositions = {};
  }

  async setupGame() {
    await this.carManager.inputCarName();
    this.carManager.getCarName().forEach((carName) => {
      this.carPositions[carName] = "";
    });
  }

  playRound() {
    Object.keys(this.carPositions).forEach((carName) => {
      if (movingForwardCase()) {
        this.carPositions[carName] += FORWARD_DASH;
        Console.print(FORWARD_DASH);
      }
    });
  }

  printRoundResult() {
    Object.entries(this.carPositions).forEach(([carName, position]) => {
      Console.print(`${carName} : ${position}`);
    });
    Console.print();
  }

  findWinner() {
    const maxPosition = Math.max(...Object.values(this.carPositions).map((pos) => pos.length));
    return Object.entries(this.carPositions)
      .filter(([_, position]) => position.length === maxPosition)
      .map(([carName, _]) => carName);
  }

  printGameResult(carGame) {
    Console.print(GAME_RESULT);
    carGame.printRoundResult();
    const winners = carGame.findWinner();
    Console.print(`${WINNER} : ${winners.join(", ")}`);
  }
}

export default playGame;
