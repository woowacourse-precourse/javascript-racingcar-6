import { Console } from "@woowacourse/mission-utils";
import { inputCarNameHandler } from "./utils/inputHandler.js";

class App {
  async play() {
    const carNameList = await inputCarNameHandler();
    Console.print(carNameList);
  }
}

export default App;
