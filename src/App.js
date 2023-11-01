import RacingCarGame  from "./RacingCarGame/RacingCarGame.js";

class App {
  #racingcarGame;

  constructor() {
    this.#racingcarGame = new RacingCarGame();
  }

  async play() {
    await this.#racingcarGame.startGame();
  }
}

const app = new App();
app.play();

export default App;