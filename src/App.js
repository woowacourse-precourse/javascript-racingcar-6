import { playGame } from "./GameLogic.js";

class App {
  async play() {
    await playGame();
  }
}

export default App;
