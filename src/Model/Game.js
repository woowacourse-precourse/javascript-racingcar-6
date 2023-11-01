import { Random } from '@woowacourse/mission-utils';

import NUMBER from '../constants/Number.js';

const { ZERO, ONE, MIN, MAX, LIMIT_NUMBER } = NUMBER;

class Game {
  #racingCars;

  #totalLab;

  #currentLab;

  racingCommentary;

  constructor({ racingCars, attemptNumber }) {
    this.#racingCars = racingCars;
    this.#totalLab = attemptNumber;
    this.#currentLab = ZERO;
    this.racingCommentary = [];
  }

  // @TODO: 함수 이름 변경, 기능 분리
  startRace() {
    do {
      this.#move();
      this.#getRacingCommentary();
      this.#currentLab += ONE;
    } while (this.#currentLab < this.#totalLab);

    const winner = this.#getWinner();
    return { result: this.racingCommentary, winner };
  }

  #move() {
    this.#racingCars.forEach((car) => {
      if (Random.pickNumberInRange(MIN, MAX) >= LIMIT_NUMBER) car.moveCar();
    });
  }

  #getRacingCommentary() {
    this.racingCommentary.push(
      this.#racingCars.map((car) => ({
        name: car.getCarName(),
        position: car.getCarPosition(),
      })),
    );
  }

  #getWinner() {
    const carPositions = this.#racingCars.map((car) => car.getCarPosition());
    const maxValue = Math.max(...carPositions);

    const winner = this.#racingCars.filter(
      (car) => car.getCarPosition() === maxValue,
    );

    return winner.map((car) => car.getCarName());
  }
}

export default Game;
