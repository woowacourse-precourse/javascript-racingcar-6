import Car from './Car.js';

class CarRacingGame {
  #cars;
  #round;

  constructor(carNames, round) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#round = round;
  }

  race(randomNumberGenerator) {
    this.#cars.forEach((car) => {
      const randomNumber = randomNumberGenerator();

      if (randomNumber >= 4) car.move();
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
