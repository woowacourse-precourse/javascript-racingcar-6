import Car from './Car.js';
import { GAME_CONDITION } from '../constants/constants.js';

class CarRacingGame {
  #cars;
  #round;

  constructor(carNames, round) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#round = round;
  }

  /**
   * 자동차의 각 랜덤 값이 조건에 충족할때, 해당 자동차는 1칸 이동한다.
   */
  race(randomNumberGenerator) {
    this.#cars.forEach((car) => {
      const randomNumber = randomNumberGenerator();

      if (randomNumber >= GAME_CONDITION.passNumber) car.move();
    });

    this.#round -= 1;
  }

  getRoundResult() {
    return this.#cars.map((car) => {
      const name = car.getName();
      const progress = car.getProgress();

      return { name, progress };
    });
  }

  /**
   * 가장 높은 전진값을 가진 자동차의 이름들을 반환한다.
   * @returns {[string]} 문자배열
   */
  getWinners() {
    const highProgress = Math.max(...this.#cars.map((car) => car.getProgress()));
    const winners = this.#cars.filter((car) => car.getProgress() === highProgress);

    return winners.map((car) => car.getName());
  }

  isPlaying() {
    return this.#round > 0;
  }
}

export default CarRacingGame;
