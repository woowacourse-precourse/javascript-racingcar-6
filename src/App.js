import GameManager from "./controller/GameManager.js";
class App {
  constructor() {
    this.gameManager = new GameManager();
  }
  async play() {
    await this.gameManager.initGame();
    await this.gameManager.startRace();
  }
}

export default App;
