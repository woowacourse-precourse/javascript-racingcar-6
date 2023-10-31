import CarRacingGame from '../domain/CarRacingGame.js';
import InputValidator from '../domain/InputValidator.js';
import randomNumberGenerator from '../utils/RandomNumberGenerator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { MESSAGE } from '../constants/messages.js';

class CarRacingGameController {
  #carRacingGame;

  async initGame() {
    const carNames = await this.#requireCarNames();
    const round = await this.#requireRound();

    this.#carRacingGame = new CarRacingGame(carNames, round);
  }

  startGame() {
    this.#currentRacing();
    this.#endGame();
  }

  async #requireCarNames() {
    const inputCarNames = await InputView.getCarNames();
    const carNames = inputCarNames.split(',').map((name) => name.trim());

    InputValidator.validateCarNames(carNames);

    return carNames;
  }

  async #requireRound() {
    const round = await InputView.getRound();

    InputValidator.validateRound(round);

    return round;
  }

  #currentRacing() {
    OutputView.printStaticMessage(MESSAGE.playResult);

    while (this.#carRacingGame.isPlaying()) {
      this.#carRacingGame.race(randomNumberGenerator);

      const currentResult = this.#carRacingGame.getRoundResult();

      return OutputView.printCurrentResult(currentResult);
    }
  }

  #endGame() {
    const winners = this.#carRacingGame.getWinners();

    return OutputView.printFinalWinner(winners);
  }
}

export default CarRacingGameController;
