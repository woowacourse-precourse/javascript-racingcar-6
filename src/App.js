import RacingCarGame from "./RacingCarGame.js";

class App {
  async play() {
    const racingCarGame = new RacingCarGame();
    await racingCarGame.game();
  }
}

export default App;
