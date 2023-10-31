import { Console } from "@woowacourse/mission-utils";
import { CarController, Player } from "./model/index.js";

class App {
  async play() {
    const names = await CarController.setNames();
    const attemptIterations = await Player.setattemptIterations();

    Console.print(names.getNames());
    Console.print(attemptIterations.getattemptIteraions());
  }
}

export default App;
