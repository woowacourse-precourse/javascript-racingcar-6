import RacingGame from "./RacingGame/index.js";

class App {
  async play() {

    const game = new RacingGame();
    await game.gameStart();
  }
}

export default App;
