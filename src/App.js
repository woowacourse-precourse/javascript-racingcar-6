import RacingGameController from './controller/RacingGameController.js';

class App {
  constructor() {
    this.racingGame = new RacingGameController();
  }

  async play() {
    await this.racingGame.start();
  }
}

export default App;
