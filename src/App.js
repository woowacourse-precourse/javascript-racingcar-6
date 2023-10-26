import RacingGameController from './controllers/RacingGameController.js';
import RacingGame from './models/RacingGame.js';

class App {
  async play() {
    const racingGame = new RacingGame();
    const racingGameController = new RacingGameController(racingGame);
    await racingGameController.initiate();
  }
}

export default App;
