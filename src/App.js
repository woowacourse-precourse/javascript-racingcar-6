import { racingGame } from "./function/racingGame.js";
class App {
  async play() {
    await racingGame()
  }
}

export default App;