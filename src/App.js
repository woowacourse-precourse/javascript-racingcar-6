import GamePlay from "./index.js";

class App {
  constructor() {
    this.Game = new GamePlay();
  }

  async play() {
    await this.Game.startGame();
  }
}

export default App;

const app = new App();
app.play();
