import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE, POSITION_MARK } from "./constants.js";
import RacingGame from "./RacingGame.js";

class App {
  async play() {
    const game = new RacingGame();
    await game.play();
  }
}

export default App;
