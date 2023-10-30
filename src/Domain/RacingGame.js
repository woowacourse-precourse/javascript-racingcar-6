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
  }

  startRace() {
    this.#race();

    return this.#getRaceResult();
  }

  #race() {
    while (!this.#gameEnd()) {
      this.#moveCars();
      this.#currentRound += RACING_GAME.round.unit;
    }
  }

  #gameEnd() {
    return this.#currentRound >= this.#round;
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
    const cars = this.#cars.filter((car) => car.getPosition() === maxPosition);

    return cars.map((car) => car.getName());
  }

  #getRaceResult() {
    const winner = this.#getWinners();
    const raceResult = this.#cars.map((car) => ({
      name: car.getName(),
      position: car.getPosition(),
    }));

    return { winner, raceResult };
  }
}

export default RacingGame;
