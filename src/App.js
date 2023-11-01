import { Game } from "./controller/game.js";

class App {
  async play() {
    const game = new Game();
    await game.playGame();
  }
}

export default App;
