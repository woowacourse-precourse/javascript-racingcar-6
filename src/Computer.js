import User from './User.js';
import RacingCar from './RacingCar.js';

export default class Computer {
  constructor() {
    this.racingCars = [];
  }

  async playGame(user) {
    this.racingCars = await this.getCarNameArrayFromUserInput(user);
    const trialNum = await this.getTrialNumberFromUserInput(user);
    this.tryToMoveCars(trialNum);
  }

  tryToMoveCars(times) {
    for (let time = 0; time < times; time++) {
      console.log('move cars');
      this.racingCars.forEach((car) => car.moveForward());
    }
  }

  async getCarNameArrayFromUserInput(user) {
    const userInput = await user.inputCarName();
    const carNameArr = this.getCarNameArrayFromString(userInput);
    return carNameArr.map((carName) => new RacingCar(carName));
  }

  getCarNameArrayFromString(str) {
    const carNameArr = str.split(',').map((name) => name.trim());
    if (carNameArr.some((carName) => carName.length > 5 || carName === ''))
      throw new Error('[ERROR] 잘못된 입력입니다.');
    return carNameArr;
  }

  async getTrialNumberFromUserInput(user) {
    const userInput = await user.inputTrialNumber();
    const trialNum = this.getTrialNumberFromString(userInput);
    return trialNum;
  }

  getTrialNumberFromString(str) {
    if (Number.isNaN(Number(str)))
      throw new Error('[ERROR] 잘못된 입력입니다.');
    return Number(str);
  }
}
