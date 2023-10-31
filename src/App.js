import RacingGame from "./racingGame.js";

class App {
  async play() {
    const racingGame = new RacingGame();
    await racingGame.start();
  }
}

export default App;
