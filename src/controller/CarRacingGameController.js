import CarRacingGame from '../domain/CarRacingGame.js';
import randomNumberGenerator from '../utils/RandomNumberGenerator.js';
import InputView from '../views/InputView.js';

class CarRacingGameController {
  #carRacingGame;

  async startGame() {
    const carNames = await InputView.getCarNames();
    const round = await InputView.getRound();
    this.#carRacingGame = new CarRacingGame(carNames, round);
    this.currentRacing();
  }

  currentRacing() {
    while (this.#carRacingGame.isPlaying()) {
      this.#carRacingGame.race(randomNumberGenerator);

      const currentResult = this.#carRacingGame.getRoundResult();
      console.log(currentResult);
    }

    const winners = this.#carRacingGame.getWinners();
    console.log(winners);
  }
}

export default CarRacingGameController;
