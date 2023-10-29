import RacingCar from './domain/RacingCar.js';

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
}

export default RacingGame;
