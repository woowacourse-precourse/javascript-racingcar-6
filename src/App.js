import checkCarNames from "./checkCarNames";
import inputCarNames from "./inputCarNames";
import inputCount from "./inputCount";

class App {
  async play() {
    const carNames = await inputCarNames();
    checkCarNames(carNames);
    const count = await inputCount();
  }
}

export default App;
