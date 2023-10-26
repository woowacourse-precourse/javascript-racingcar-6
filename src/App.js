import { Console } from "@woowacourse/mission-utils";
import checkCarNames from "./checkCarNames";
import inputCarNames from "./inputCarNames";

class App {
  async play() {
    const carNames = await inputCarNames();
    checkCarNames(carNames);
  }
}

export default App;
