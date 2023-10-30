import Game from "./Game.js";

class App {
  async play() {
    const game = new Game();
    await game.inputCarName();
    await game.inputAttemptNumber();
  }
}

export default App;
