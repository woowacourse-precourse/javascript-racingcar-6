import GameController from './controller/GameController.js';

class App {
  constructor() {
    this.controller = new GameController();
  }

  async play() {
    await this.controller.progressGame();
  }
}

export default App;
