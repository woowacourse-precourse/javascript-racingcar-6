import { Console } from '@woowacourse/mission-utils';
import User from './User.js';
import RacingCar from './RacingCar.js';
import MESSAGE from './Constant.js';

export default class Computer {
  constructor() {
    this.racingCars = [];
  }

  async playGame() {
    const carNameArr = await User.getCarNameArray();
    this.setRacingCarArray(carNameArr);

    const trialNum = await User.getTrialNumber();
    this.moveCarsForTrialNumber(trialNum);

    this.printFinalWinnersName();
  }

  setRacingCarArray(carNameArray) {
    this.racingCars = carNameArray.map((carName) => new RacingCar(carName));
  }

  moveCarsForTrialNumber(trialNum) {
    for (let time = 0; time < trialNum; time += 1) {
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
