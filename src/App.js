import RacingGame from "./racingGame/racingGame.js";

class App {
  async play() {
    try {
      const racingGame = new RacingGame();
      await racingGame.start();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default App;
