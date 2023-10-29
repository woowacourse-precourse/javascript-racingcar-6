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

    this.#play();
  }

  moveCars() {
    const shouldMove =
      Random.pickNumberInRange(CAR.movement.min, CAR.movement.max) >=
      CAR.movement.threshold;

    this.#cars.forEach((car) => {
      if (shouldMove) car.move();
    });
  }

  #getCarPositions() {
    return this.#cars.map((car) => car.getPosition());
  }

  #getWinners() {
    const maxPosition = Math.max(...this.getCarPositions());
    return this.#cars.filter((car) => car.getPosition() === maxPosition);
  }

  #isEnd() {
    return this.#currentRound >= this.#round;
  }

  #play() {
    while (!this.#isEnd()) {
      this.moveCars();
      this.#currentRound += RACING_GAME.round.unit;
    }
  }
}

export default RacingGame;
