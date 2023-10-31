import GameController from './lib/classes/GameController.js';
import GameInputManager from './lib/classes/GameInputManager.js';

class App {
  async play() {
    const gameInputManager = new GameInputManager();
    const { racingCars, playCount } = await gameInputManager.getRacingInfo();
    const gameController = new GameController({ racingCars, playCount });
    gameController.startRacingGame();
  }
}

export default App;
