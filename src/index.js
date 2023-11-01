import Controllers from "./Controllers/index.js";
import { MESSAGE } from "./Constants/message.js";

class GamePlay {
  constructor() {
    this.controllers = new Controllers();
  }
  async startGame() {
    const cars = await this.controllers.getUserInput(MESSAGE.GAME_START);
    const times = await this.controllers.getTryTimes(MESSAGE.TRY_TIMES);

    const result = await this.controllers.carMoveCheck(cars, Number(times));
    this.controllers.selectWinner(result);
  }
}

export default GamePlay;
