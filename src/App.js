import { Console, MissionUtils } from "@woowacourse/mission-utils";
import RacingGameController from "./controller/RacingGameController.js";

class App {
  #RacingGame = new RacingGameController();
  constructor() {}

  async play() {
    await this.#RacingGame.startGame();
  }
}
const app = new App();
app.play();

export default App;
