import User from './User.js';
import RacingCar from './RacingCar.js';

export default class Computer {
  constructor() {
    this.racingCars = [];
  }

  async playGame(user) {
    await this.getCarNameInputFromUser(user);
    await this.getTrialNumberInputFromUser(user);
  }

  async getCarNameInputFromUser(user) {
    const userInput = await user.inputCarName();
    const carNameArr = this.getCarNameArrayFromString(userInput);
    this.racingCars = carNameArr.map((carName) => new RacingCar(carName));
  }

  getCarNameArrayFromString(str) {
    const carNameArr = str.replace(/ /g, '').split(',');
    if (carNameArr.some((carName) => carName.length > 5 || carName === ''))
      throw new Error('[ERROR] 잘못된 입력입니다.');
    return carNameArr;
  }

  async getTrialNumberInputFromUser(user) {
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
