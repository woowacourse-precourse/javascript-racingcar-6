import { Console } from "@woowacourse/mission-utils";
import { inputHandler } from "./utils/inputHandler.js";

class App {
  async play() {
    const carNameList = await inputHandler();
    Console.print(carNameList);
  }
}

export default App;
