import RacingGameController from './controllers/RacingGameController.js';
import RacingCarFactory from './models/RacingCarFactory.js';
import RacingGame from './models/RacingGame.js';

class App {
  async play() {
    const racingGame = new RacingGame();
    const racingCarFactory = new RacingCarFactory();
    const racingGameController = new RacingGameController(
      racingGame,
      racingCarFactory
    );
    await racingGameController.initiate();
  }
}

export default App;
