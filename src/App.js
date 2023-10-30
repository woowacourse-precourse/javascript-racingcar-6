import { playGame } from "./game/playGame.js";
import { initGame } from "./game/initGame.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    Console.print("start")
    await initGame();
  }
};

export default App;