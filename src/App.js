import PlayRacingGame from "./PlayRacingGame.js";

class App {
  async play() {
    this.start();
  }

  start() {
    const game = new PlayRacingGame();

    game.play();
  }
}

export default App;
