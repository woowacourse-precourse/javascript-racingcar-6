import CONDITIONS from '../constants/Conditions.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

class CarRace {
  #raceCars;

  #pickNumber;

  constructor(raceCars, pickNumber = generateRandomNumber) {
    this.#raceCars = raceCars;
    this.#pickNumber = pickNumber;
  }

  runQuarter() {
    this.#raceCars.forEach((car) => {
      const number = this.#pickNumber();
      if (number >= CONDITIONS.moveCar) {
        car.moveCar();
      }
    });
  }

  findRaceWinners() {
    const furthestPosition = Math.max(...this.#raceCars.map((car) => car.getCarPosition()));
    const raceWinners = this.#raceCars
      .filter((car) => car.getCarPosition() === furthestPosition)
      .map((car) => car.getCarName())
      .join(', ');

    return raceWinners;
  }

  getRaceCars() {
    return this.#raceCars;
  }
}

export default CarRace;
