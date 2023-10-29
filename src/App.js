import RacingGame from './RacingGame.js';
import InputManager from './utils/InputManager.js';

class App {
  async play() {
    const racingGame = new RacingGame();
    racingGame.start();
    const cars = await InputManager.inputRacingCarNames();
    racingGame.generateRacingCars(cars);

    const attemptNumber = await InputManager.inputGameAttemptNumber();
    racingGame.startRacing(attemptNumber);

    racingGame.announceGameWinners();
    racingGame.end();
  }
}

export default App;
