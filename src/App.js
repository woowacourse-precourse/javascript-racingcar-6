import RacingGame from './RacingGame.js';
import InputManager from './utils/InputManager.js';

class App {
  #racingGame;

  constructor() {
    this.#racingGame = new RacingGame();
  }

  async play() {
    this.#racingGame.start();

    const cars = await InputManager.inputRacingCarNames();
    this.#racingGame.prepareRacingCarsInStadium(cars);

    const attemptNumber = await InputManager.inputGameAttemptNumber();
    this.#racingGame.startRacing(attemptNumber);

    this.#racingGame.announceGameWinners();
    this.#racingGame.end();
  }
}

export default App;
