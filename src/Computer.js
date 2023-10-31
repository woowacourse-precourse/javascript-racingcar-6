import { Console } from '@woowacourse/mission-utils';
import User from './User.js';
import RacingCar from './RacingCar.js';

import MESSAGE from './Constant.js';

export default class Computer {
  constructor() {
    this.racingCars = [];
  }

  async playGame() {
    this.racingCars = await Computer.getCarNameArrayFromUserInput();
    const trialNum = await Computer.getTrialNumberFromUserInput();
    this.tryToMoveCars(trialNum);
    this.printFinalWinnersName();
  }

  tryToMoveCars(times) {
    for (let time = 0; time < times; time += 1) {
      this.racingCars.forEach((car) => {
        car.moveForward();
        car.printDistance();
      });

      Console.print('');
    }
  }

  printFinalWinnersName() {
    const winnersName = this.getFinalWinnersName().join(', ');
    Console.print(`${MESSAGE.FINAL_WINNER}${winnersName}`);
  }

  getFinalWinnersName() {
    const maxDistance = this.getMaxDistance();
    return this.racingCars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);
  }

  getMaxDistance() {
    return Math.max(...this.racingCars.map((car) => car.distance));
  }

  static async getCarNameArrayFromUserInput() {
    const userInput = await User.inputCarName();
    const carNameArr = this.getCarNameArrayFromString(userInput);
    return carNameArr.map((carName) => new RacingCar(carName));
  }

  static getCarNameArrayFromString(str) {
    const carNameArr = str.split(',').map((name) => name.trim());
    if (carNameArr.some((carName) => carName.length > 5 || carName === ''))
      throw new Error(MESSAGE.ERROR_WRONG_INPUT);
    return carNameArr;
  }

  static async getTrialNumberFromUserInput() {
    const userInput = await User.inputTrialNumber();
    const trialNum = this.getTrialNumberFromString(userInput);
    return trialNum;
  }

  static getTrialNumberFromString(str) {
    if (Number.isNaN(Number(str))) throw new Error(MESSAGE.ERROR_WRONG_INPUT);
    return Number(str);
  }
}
