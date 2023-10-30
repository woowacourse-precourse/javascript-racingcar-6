import Game from "./Game.js";

class App {
  async play() {
    const game = new Game();
    game.inputCarName();
  }
}

export default App;
