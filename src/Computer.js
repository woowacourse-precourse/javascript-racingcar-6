import User from './User.js';
import RacingCar from './RacingCar.js';

export default class Computer {
  constructor() {
    this.racingCars = [];
  }

  async playGame() {
    this.racingCars = await Computer.getCarNameArrayFromUserInput();
    const trialNum = await Computer.getTrialNumberFromUserInput();
    this.tryToMoveCars(trialNum);
  }

  tryToMoveCars(times) {
    for (let time = 0; time < times; time += 1) {
      this.racingCars.forEach((car) => car.moveForward());
    }
  }

  static async getCarNameArrayFromUserInput() {
    const userInput = await User.inputCarName();
    const carNameArr = Computer.getCarNameArrayFromString(userInput);
    return carNameArr.map((carName) => new RacingCar(carName));
  }

  static getCarNameArrayFromString(str) {
    const carNameArr = str.split(',').map((name) => name.trim());
    if (carNameArr.some((carName) => carName.length > 5 || carName === ''))
      throw new Error('[ERROR] 잘못된 입력입니다.');
    return carNameArr;
  }

  static async getTrialNumberFromUserInput() {
    const userInput = await User.inputTrialNumber();
    const trialNum = Computer.getTrialNumberFromString(userInput);
    return trialNum;
  }

  static getTrialNumberFromString(str) {
    if (Number.isNaN(Number(str)))
      throw new Error('[ERROR] 잘못된 입력입니다.');
    return Number(str);
  }
}
