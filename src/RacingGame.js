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

  tryOneAttempt() {
    this.getRacingCars().map((racingCar) => {
      const randomNumber = GameUtlis.generateRandomNumberFromZeroToNine();
      GameUtlis.printCarNameAndRandomNumber(racingCar.getName(), randomNumber);
      return this;
    });
  }
}

export default RacingGame;
