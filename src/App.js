import { Console } from "@woowacourse/mission-utils";
import {
  inputCarNameHandler,
  inputTryNumberHandler,
} from "./utils/inputHandler.js";

class App {
  async play() {
    const carNameList = await inputCarNameHandler();
    const tryNumber = await inputTryNumberHandler();
    Console.print(carNameList);
    Console.print(tryNumber);
  }
}

export default App;
