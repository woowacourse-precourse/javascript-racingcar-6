import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import RacingGame from "../model/RacingGame.js";
import InputValidator from "../utils/Validator.js";
class RacingGameController {
  #racingCars;
  #result;

  constructor() {}

  async startGame() {
    await this.readRacingCars();
    await this.readRacingAttempt();
    this.showRaceStartMessage();
  }

  async readRacingCars() {
    await InputView.inputRacingCars((input) => {
      this.#racingCars = new RacingGame(input);
      InputValidator.validateRacingCarName(this.#racingCars.getRacingCarsName);
    });
  }

  async readRacingAttempt() {
    await InputView.inputRacingAttempt((input) => {
      this.#racingCars.setRacingAttempt(input);
      InputValidator.validateRacingAttempt(input);
    });
  }

  showRaceStartMessage() {
    OutputView.printRaceStartMessage();
    this.race();
  }

  get getRaceScore() {
    return this.#racingCars.raceScore;
  }

  showRaceScore(score) {
    Object.entries(score).forEach(([name, score]) => {
      OutputView.printRaceScore(name, score);
    });
  }

  calculateWinner(score) {
    const winnerScore = Math.max(...Object.values(score));
    const winners = Object.entries(score)
      .filter(([_, score]) => score === winnerScore)
      .map(([name, _]) => name);
    return winners;
  }

  showRaceWinner(score) {
    const winners = this.calculateWinner(score);
    OutputView.printGameWinnerMessage(winners);
  }

  race() {
    for (let i = 0; i < this.#racingCars.getRacingAttempt; i++) {
      const raceScore = this.getRaceScore;
      this.showRaceScore(raceScore);
      OutputView.printNewRound();
      this.#result = raceScore;
    }
    this.showRaceWinner(this.#result);
  }
}

export default RacingGameController;
