import RacingCarController from './controller/RacingCarController.js';

class App {
  constructor() {
    this.game = new RacingCarController();
  }

  async play() {
    await this.game.start();
  }
}

export default App;
