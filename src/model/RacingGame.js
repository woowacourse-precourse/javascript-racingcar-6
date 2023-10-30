import { RACING_CAR } from '../constants/constants.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

class RacingGame {
  constructor() {
    /** @type {Array} */
    this.racingCar = [];
  }

  get getRacingCar() {
    return this.racingCar;
  }

  set setRacingCar(racingCars) {
    racingCars.forEach((car) => this.racingCar.push(car));
  }

  /** 난수 값이 4이상일 경우 한칸 전진 */
  checkMove() {
    this.racingCar.forEach((car) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= RACING_CAR.MOVE_NUMBER) car.move();
    });
  }
}

export default RacingGame;
