import GameController from './Controller/GameController.js';

class App {
  constructor() {
    this.controller = new GameController();
  }

  async play() {
    await this.controller.start();
  }
}

export default App;
