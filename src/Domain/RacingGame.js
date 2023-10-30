import RACING_GAME from '../constants/racingGame.js';

class RacingGame {
  #cars;

  #round;

  #currentRound;

  constructor({ cars = [], round = RACING_GAME.round.default }) {
    this.#cars = cars;
    this.#round = round;
    this.#currentRound = RACING_GAME.round.default;

    this.#gameFlow();
  }

  #gameFlow() {
    this.#playGame();
  }

  #moveCars() {
    this.#cars.forEach((car) => {
      car.move();
    });
  }

  #gameEnd() {
    return this.#currentRound >= this.#round;
  }

  #playGame() {
    while (!this.#gameEnd()) {
      this.#moveCars();
      this.#currentRound += RACING_GAME.round.unit;
    }
  }
}

export default RacingGame;
