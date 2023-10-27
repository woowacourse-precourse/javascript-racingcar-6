import Game from "./Game.js";
class App {
  async play() {
    try {
      const game = new Game();
      await game.start();
    } catch (err) {
      throw new Error("[ERROR] " + err.message);
    }
  }
}

export default App;
