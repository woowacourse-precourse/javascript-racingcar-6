import RacingCarGame from './logic/RacingCarGame.js';

class RacingCarGameManager {
  #racingCarGame;
  #cars;
  #tryCount;

  constructor() {
    this.#racingCarGame = new RacingCarGame();
    this.#cars = [];
    this.#tryCount = 0;
  }

  async initializeGame() {
    const carNames = await this.#racingCarGame.getCarNames();
    this.#cars = this.#racingCarGame.createCarObjectsFromNames(carNames);
    this.#tryCount = await this.#racingCarGame.getTryCount();
  }

  runGame() {
    this.#racingCarGame.repeatMove(this.#cars, this.#tryCount);
  }

  displayResult() {
    const winners = this.#racingCarGame.getWinners(this.#cars);
    this.#racingCarGame.displayResult(winners);
  }
}

export default RacingCarGameManager;
