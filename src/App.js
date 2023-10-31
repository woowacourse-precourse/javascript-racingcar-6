import RacingcarGame from "./RacingcarGame.js";

class App {
  async play() {
    const racingcar = new RacingcarGame();
    await racingcar.startGame();
  }
}

export default App;
