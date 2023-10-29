import User from './User.js';
import RacingCar from './RacingCar.js';

export default class Computer {
  static get MESSAGE() {
    return {
      COMMAND_INPUT_CAR_NAME:
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
      COMMAND_INPUT_TRIAL_NUMBER: '시도할 횟수는 몇 회인가요?\n',
      ERROR_WRONG_INPUT: '[ERROR] 잘못된 입력입니다.',
    };
  }

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
    const carNameArr = this.getCarNameArrayFromString(userInput);
    return carNameArr.map((carName) => new RacingCar(carName));
  }

  static getCarNameArrayFromString(str) {
    const carNameArr = str.split(',').map((name) => name.trim());
    if (carNameArr.some((carName) => carName.length > 5 || carName === ''))
      throw new Error(this.MESSAGE.ERROR_WRONG_INPUT);
    return carNameArr;
  }

  static async getTrialNumberFromUserInput() {
    const userInput = await User.inputTrialNumber();
    const trialNum = this.getTrialNumberFromString(userInput);
    return trialNum;
  }

  static getTrialNumberFromString(str) {
    if (Number.isNaN(Number(str)))
      throw new Error(this.MESSAGE.ERROR_WRONG_INPUT);
    return Number(str);
  }
}
