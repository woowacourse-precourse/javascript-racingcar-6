import { Console, MissionUtils } from "@woowacourse/mission-utils";
import RacingGameController from "./controller/RacingGameController.js";

class App {
  #RacingGame = new RacingGameController();
  constructor() {}

  async play() {
    await this.#RacingGame.startGame();
  }
}

export default App;
