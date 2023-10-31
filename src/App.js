import Game from "./Race/Game.js";

class App {
  async play() {
    const game = new Game();
    await game.init();
  }
}

export default App;
