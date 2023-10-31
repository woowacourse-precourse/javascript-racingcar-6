import GameController from './controller/gameController.js';

class App {
  constructor() {
    this.gameController = new GameController();
  }

  async play() {
    await this.gameController.startGame();
  }
}

export default App;
