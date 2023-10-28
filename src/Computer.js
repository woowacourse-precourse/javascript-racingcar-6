import User from './User.js';
import RacingCar from './RacingCar.js';

export default class Computer {
  constructor() {
    this.racingCars = [];
  }

  playGame(user) {}

  async getCarNameInputFromUser(user) {
    const userInput = await user.getCarNameInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNameArr = this.getCarNameArrayFromString(userInput);
    this.racingCars = carNameArr.map((carName) => new RacingCar(carName));
  }

  getCarNameArrayFromString(str) {
    const carNameArr = str.replace(/ /g, '').split(',');
    if (carNameArr.some((carName) => carName.length > 5 || carName === ''))
      throw new Error('[ERROR] 잘못된 입력입니다.');
    return carNameArr;
  }
}
