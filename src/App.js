import { Console } from "@woowacourse/mission-utils";
import { GAME_MESSAGE } from "./constants/Message";

class App {
  async play() {
    Console.print(GAME_MESSAGE.inputName);
    const carNames = await Console.readLineAsync("");
  }
}

export default App;
