import RacingGame from './RacingGame.js';
import InputManager from './utils/InputManager.js';

class App {
  async play() {
    const racingGame = new RacingGame();
    racingGame.start();
    const cars = await InputManager.inputRacingCarNames();
    racingGame.generateRacingCars(cars);

    await InputManager.inputGameAttemptNumber();
  }
}

export default App;
