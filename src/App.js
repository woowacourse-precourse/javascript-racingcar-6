import RacingGame from "./model/RacingGame/RacingGame.js";

class App {
  async play() {
    const racingGame = new RacingGame();
    await racingGame.start();
  }
}

export default App;
