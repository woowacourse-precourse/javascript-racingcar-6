import GamePlay from "./index.js";

class App {
  constructor() {
    this.Game = new GamePlay();
  }

  async play() {
    this.Game.getCarNames();
  }
}

export default App;
