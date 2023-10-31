import CarRacingGame from '../domain/CarRacingGame.js';
import InputValidator from '../domain/InputValidator.js';
import randomNumberGenerator from '../utils/randomNumberGenerator.js';
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

  /**
   * 조건에 유효한 자동차 이름들을 배열로 반환한다.
   * @returns {String[]}
   */
  async #requireCarNames() {
    const inputCarNames = await InputView.getCarNames();
    const carNames = inputCarNames.split(',').map((name) => name.trim());

    InputValidator.validateCarNames(carNames);

    return carNames;
  }

  async #requireRound() {
    const inputRound = await InputView.getRound();
    const round = parseInt(inputRound, 10);

    InputValidator.validateRound(round);

    return round;
  }

  /**
   * 각 라운드의 진행상황을 출력한다. [{ name, progress }] 객체배열의 값을 문자로 출력
   */
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
