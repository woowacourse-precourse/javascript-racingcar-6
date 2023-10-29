import RacingCar from './domain/RacingCar.js';
import GameUtlis from './utils/GameUtils.js';

class RacingGame {
  #racingCars;

  start() {
    return this;
  }

  generateRacingCars(cars) {
    const racingCars = [];

    cars.forEach((car) => {
      const newCar = new RacingCar(car);
      racingCars.push(newCar);
    });

    this.#racingCars = racingCars;
  }

  getRacingCars() {
    return this.#racingCars;
  }

  startRacing(attemptNumber) {
    GameUtlis.repeatRacing(attemptNumber, this);
  }
}

export default RacingGame;
