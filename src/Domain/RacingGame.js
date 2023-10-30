import { Random } from '@woowacourse/mission-utils';
import RACING_GAME from '../constants/racingGame.js';
import CAR from '../constants/car.js';

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
    this.#getWinners();
  }

  #moveCars() {
    this.#cars.forEach((car) => {
      const shouldMove =
        Random.pickNumberInRange(CAR.movement.min, CAR.movement.max) >=
        CAR.movement.threshold;

      if (shouldMove) car.move();
    });
  }

  #getCarPositions() {
    return this.#cars.map((car) => car.getPosition());
  }

  #getWinners() {
    const maxPosition = Math.max(...this.#getCarPositions());

    return this.#cars.filter((car) => car.getPosition() === maxPosition);
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
