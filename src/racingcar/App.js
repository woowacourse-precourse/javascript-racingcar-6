import RacingGame from './lib/classes/RacingGame';
import RacingGameInputManager from './lib/classes/RacingGameInputManager';

class App {
  async play() {
    const racingGameInputManager = new RacingGameInputManager();
    const { racingCars, playCount } =
      await racingGameInputManager.getRacingInfo();
    const racingGame = new RacingGame({ racingCars, playCount });
    racingGame.startRacingGame();
  }
}

export default App;
