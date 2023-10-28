import CarRacingGame from '../domain/CarRacingGame.js';
import InputValidator from '../domain/InputValidator.js';
import randomNumberGenerator from '../utils/RandomNumberGenerator.js';
import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';

class CarRacingGameController {
  #carRacingGame;

  async startGame() {
    const carNames = await InputView.getCarNames();
    const round = await InputView.getRound();

    const validCarNames = InputValidator.hasValidCarNames(carNames);
    const validRound = InputValidator.hasValidRound(round);

    this.#carRacingGame = new CarRacingGame(validCarNames, validRound);
    this.currentRacing();
  }

  currentRacing() {
    OutputView.printStaticMessage('\n실행 결과');
    while (this.#carRacingGame.isPlaying()) {
      this.#carRacingGame.race(randomNumberGenerator);

      const currentResult = this.#carRacingGame.getRoundResult();
      OutputView.printCurrentResult(currentResult);
    }

    const winners = this.#carRacingGame.getWinners();
    this.endGame(winners);
  }

  endGame(winners) {
    return OutputView.printFinalWinner(winners);
  }
}

export default CarRacingGameController;
