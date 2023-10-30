import { Console } from "@woowacourse/mission-utils";
import { racingGame } from "./function/racingGame.js";
class App {
  async play() {
    Console.print(await racingGame());
  }
}

export default App;