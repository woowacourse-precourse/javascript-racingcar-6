import InputView from "./view/InputView.js";

class App {
  async play() {
    await InputView.readUserRaceCarName();
    await InputView.readAttemptsCount();
  }
}

export default App;
