import { MissionUtils } from "@woowacourse/mission-utils";
import { playRacing, winner } from "./racingGame.js";

class App {
  async start() {
    // await playRacing();
    await winner();
  }

  async play() {
    this.start();
  }
}

export default App;
