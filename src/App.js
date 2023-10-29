import { Console } from "@woowacourse/mission-utils";
import RacingcarGame from "./RacingcarGame.js";

class App {
  async play() {
    const racingcar = new RacingcarGame();
    const inputValue = await racingcar.inputValue();
    if (inputValue) Console.print(inputValue);
  }
}

export default App;
