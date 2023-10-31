import RacingCarController from './controller/RacingCarController.js';

class App {
  async play() {
    this.game = await new RacingCarController();
    await this.game.play();
  }
}

export default App;
