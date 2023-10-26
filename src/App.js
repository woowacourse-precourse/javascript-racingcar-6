import checkCarNames from "./checkCarNames";
import inputCarNames from "./inputCarNames";

class App {
  async play() {
    const carNames = inputCarNames();
    checkCarNames(carNames);
  }
}

export default App;
