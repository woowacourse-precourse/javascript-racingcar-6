import playGame from "./game/playGame.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    await playGame();
  }
};

export default App;