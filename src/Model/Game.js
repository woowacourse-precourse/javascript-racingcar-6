import { Random } from '@woowacourse/mission-utils';

export default class Game {
  #racingCars;

  #totalLab;

  #currentLab;

  racingCommentary = [];

  constructor({ racingCars, attemptNumber }) {
    this.#racingCars = racingCars;
    this.#totalLab = attemptNumber;
    this.#currentLab = 0;
  }

  startRace() {
    do {
      this.#move();
      this.#getRacingCommentary();
      this.#currentLab += 1;
    } while (this.#currentLab < this.#totalLab);

    return this.racingCommentary;
  }

  #move() {
    this.#racingCars.forEach((car) => {
      if (Random.pickNumberInRange(1, 9) >= 4) car.moveCar();
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
}
