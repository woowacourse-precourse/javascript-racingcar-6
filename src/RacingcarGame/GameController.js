import GameModel from "./GameModel";
import GameView from "./GameView";
import { MissionUtils } from "@woowacourse/mission-utils";

class GameController {
  constructor() {
    this.model = new GameModel();
    this.view = new GameView();
  }
  async start() {
    try {
      const carnameArr = await this.getCarnameInput();
      this.model.setCarName(carnameArr);
      await MissionUtils.Console.print(this.model.CAR_NAME.join(","));
      const attempts = await this.getRacingcarAttempts();
      this.model.setAttempts(attempts);
      await MissionUtils.Console.print(this.model.ATTEMPTS);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async getCarnameInput() {
    this.view.printGetCarname();
    const getUserInput = await MissionUtils.Console.readLineAsync();

    return getUserInput.split(",").map(String);
  }

  async getRacingcarAttempts() {
    this.view.printGetAttempts();
    const getAttempts = await MissionUtils.Console.readLineAsync();

    return getAttempts;
  }
}

export default GameController;
