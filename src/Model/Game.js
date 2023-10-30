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

  // @TODO: 함수 이름 변경, 기능 분리
  startRace() {
    do {
      this.#move();
      this.#getRacingCommentary();
      this.#currentLab += 1;
    } while (this.#currentLab < this.#totalLab);

    const winner = this.#getWinner();
    return { result: this.racingCommentary, winner };
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

  #getWinner() {
    const carPositions = this.#racingCars.map((car) => car.getCarPosition());
    const maxValue = Math.max(...carPositions);

    const winner = this.#racingCars.filter(
      (car) => car.getCarPosition() === maxValue,
    );

    return winner.map((car) => car.getCarName());
  }
}
