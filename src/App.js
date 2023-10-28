import RacingGameController from './controllers/RacingGameController.js';
import RacingCarFactory from './models/RacingCarFactory.js';
import RacingGame from './models/RacingGame.js';
import InputValidator from './utils/InputValidator.js';
import InputView from './views/inputView.js';
import OutputView from './views/outputView.js';

class App {
  async play() {
    const inputValidator = new InputValidator();
    const inputView = new InputView(inputValidator);
    const outputView = new OutputView();
    const racingGame = new RacingGame();
    const racingCarFactory = new RacingCarFactory();
    const racingGameController = new RacingGameController(
      inputView,
      outputView,
      racingGame,
      racingCarFactory,
    );
    await racingGameController.initiate();
  }
}

export default App;
