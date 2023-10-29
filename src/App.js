import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE, GAME_MESSAGE } from "./constants/index.js";

class App {
  async play() {
    Console.print(GAME_MESSAGE.START);
    Console.print(ERROR_MESSAGE.IS_COMMA);
  }
}

export default App;
