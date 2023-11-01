import GameManager from './controller/GameManager.js';
class App {
  constructor() {
    this.gameManager = new GameManager();
  }
  async play() {
    await this.gameManager.initGame();
    await this.gameManager.startRace();
    await this.gameManager.finishGame();
  }
}

export default App;
