import GameController from './lib/classes/GameController';
import GameInputManager from './lib/classes/GameInputManager';

class App {
  async play() {
    const gameInputManager = new GameInputManager();
    const { racingCars, playCount } = await gameInputManager.getRacingInfo();
    const gameController = new GameController({ racingCars, playCount });
    gameController.startRacingGame();
  }
}

export default App;
