import { Console } from "@woowacourse/mission-utils";
import { CarController } from "./model/index.js";

class App {
  async play() {
    const names = await CarController.setNames();

    Console.print(names.getNames());
  }
}

export default App;
