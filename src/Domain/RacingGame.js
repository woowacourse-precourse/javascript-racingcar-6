import { Random } from '@woowacourse/mission-utils';
import RACING_GAME from '../constants/racingGame.js';
import CAR from '../constants/car.js';
import Validator from '../utils/Validator.js';

class RacingGame {
  #cars;

  #round;

  #result = RACING_GAME.result.default;

  constructor({ cars = [], round = RACING_GAME.round.default }) {
    Validator.isDuplicateCarName(cars.map((car) => car.getName()));
    this.#cars = cars;
    this.#round = {
      total: round,
      current: RACING_GAME.round.default,
    };
  }

  startRace() {
    this.#race();

    return this.#getRaceResult();
  }

  #race() {
    while (!this.#isEnd()) {
      this.#moveCars();
      this.#captureRound();
      this.#round.current += RACING_GAME.round.unit;
    }
  }

  #captureRound() {
    const raceResult = this.#cars.map((car) => ({
      name: car.getName(),
      position: car.getPosition(),
    }));

    this.#result.push(raceResult);
  }

  #isEnd() {
    return this.#round.current >= this.#round.total;
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

  #getWinner() {
    const maxPosition = Math.max(...this.#getCarPositions());
    const cars = this.#cars.filter((car) => car.getPosition() === maxPosition);

    return cars.map((car) => car.getName());
  }

  #getRaceResult() {
    const winner = this.#getWinner();
    const raceResult = this.#result;

    return { winner, raceResult };
  }
}

export default RacingGame;
