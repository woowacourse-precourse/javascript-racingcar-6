import CarRacingGame from '../domain/CarRacingGame.js';
import InputValidator from '../domain/InputValidator.js';
import randomNumberGenerator from '../utils/RandomNumberGenerator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import { MESSAGE } from '../constants/messages.js';

class CarRacingGameController {
  #carRacingGame;

  async startGame() {
    const carNames = await InputView.getCarNames();
    InputValidator.validateCarNames(carNames);

    const round = await InputView.getRound();
    InputValidator.validateRound(round);

    this.#carRacingGame = new CarRacingGame(carNames, round);

    return this.currentRacing();
  }

  currentRacing() {
    OutputView.printStaticMessage(MESSAGE.playResult);

    while (this.#carRacingGame.isPlaying()) {
      this.#carRacingGame.race(randomNumberGenerator);

      const currentResult = this.#carRacingGame.getRoundResult();

      OutputView.printCurrentResult(currentResult);
    }

    const winners = this.#carRacingGame.getWinners();

    return this.endGame(winners);
  }

  endGame(winners) {
    return OutputView.printFinalWinner(winners);
  }
}

export default CarRacingGameController;
