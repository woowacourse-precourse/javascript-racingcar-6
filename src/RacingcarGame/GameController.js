import GameModel from "./GameModel";
import GameView from "./GameView";
import { MissionUtils } from "@woowacourse/mission-utils";

class GameController {
  constructor() {
    this.model = null;
    this.view = new GameView();
  }
  async start() {
    // 게임이 종료되기 전까지 반복
    while (true) {
      const CAR_NAMES = await this.getCarnameInput();
      MissionUtils.Console.print(CAR_NAMES.join(","));
      const ATTEMPTS = await this.getRacingcarAttempts();
      MissionUtils.Console.print(ATTEMPTS);

      this.model = new GameModel(CAR_NAMES, ATTEMPTS);
      this.model.run();
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
