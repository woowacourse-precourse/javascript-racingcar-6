import GameController from './controller/GameController.js';

class App {
  constructor() {
    this.gameCotroller = new GameController();
  }

  async play() {
    await this.gameCotroller.play();
  }
}

export default App;
