import RacingcarGame from "./RacingcarGame.js";

class App {
  async play() {
    try {
      const game = new RacingcarGame();
      await game.start();
    } catch (error) {
      throw error;
    }
  }
}

export default App;
