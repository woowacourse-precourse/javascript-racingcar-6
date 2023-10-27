import { Console } from "@woowacourse/mission-utils";
import { GAME } from "./message.js";
import inputUser from "./inputUser.js";

class App {
  async play() {
    const { carArr, repeatCount } = await inputUser();
    Console.print(carArr);
    Console.print(repeatCount);
  }
}

export default App;
