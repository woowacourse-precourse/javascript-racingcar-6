import { Console } from "@woowacourse/mission-utils";
import { GAME } from "./message.js";
import inputUser from "./inputUser.js";
import startGame from "./startRacing.js";

class App {
  async play() {
    const { carMap, repeatCount } = await inputUser();
    Console.print(GAME.START);
    startGame(carMap, repeatCount);
  }
}

export default App;
