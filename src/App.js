import { MissionUtils } from "@woowacourse/mission-utils";
import { playRacing } from "./racingGame.js";

class App {
  async start() {
    await playRacing();
  }

  async play() {
    this.start();
  }
}

export default App;
