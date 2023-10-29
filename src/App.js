import InputView from "./View/InputView.js";

class App {
  async play() {
    App.#setGameConfig();
  }

  static async #setGameConfig() {
    const carName = await InputView.getCarNameInput();
    const raceCount = await InputView.getRaceCountInput();
  }
}

export default App;
