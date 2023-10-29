import CarNameManager from "./UserInputCarName";
import { movingForwardCase } from "./MovingForwardCase";
import { FORWARD_DASH } from "../const/Messages";

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
}

export default playGame;
