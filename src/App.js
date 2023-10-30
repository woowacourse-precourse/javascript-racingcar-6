import { Console } from "@woowacourse/mission-utils";
import RacingcarGame from "./RacingcarGame.js";

class App {
  async play() {
    const racingcar = new RacingcarGame();
    const startGame = await racingcar.startGame();
    // if (inputValue) Console.print(inputValue);
  }
}

export default App;
