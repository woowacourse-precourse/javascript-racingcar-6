import { Console } from '@woowacourse/mission-utils';
import User from './User.js';
import RacingCar from './RacingCar.js';
import MESSAGE from './Constant.js';

export default class Computer {
  constructor() {
    this.racingCars = [];
    this.trialNumber = 0;
  }

  async playGame() {
    this.setRacingCarArray(await User.getCarNameArray());
    this.setTrialNumber(await User.getTrialNumber());
    this.tryToMoveCarsForTrialNumber();
    this.printFinalWinnersName();
  }

  setRacingCarArray(carNameArray) {
    this.racingCars = carNameArray.map((carName) => new RacingCar(carName));
  }

  setTrialNumber(trialNum) {
    this.trialNumber = trialNum;
  }

  tryToMoveCarsForTrialNumber() {
    for (let time = 0; time < this.trialNumber; time += 1) {
      this.racingCars.forEach((car) => {
        car.moveForward();
        car.printDistance();
      });

      Console.print('');
    }
  }

  printFinalWinnersName() {
    const winnersName = this.getFinalWinnersNameArray().join(', ');
    Console.print(`${MESSAGE.FINAL_WINNER}${winnersName}`);
  }

  getFinalWinnersNameArray() {
    const maxDistance = this.getMaxDistance();
    return this.racingCars.filter((car) => car.distance === maxDistance).map((car) => car.name);
  }

  getMaxDistance() {
    return Math.max(...this.racingCars.map((car) => car.distance));
  }
}
