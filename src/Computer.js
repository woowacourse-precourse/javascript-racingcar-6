import User from './User.js';
import RacingCar from './RacingCar.js';

export default class Computer {
  constructor() {
    this.racingCars = [];
  }

  playGame(user) {}

  async getCarNameArrayFromUser(user) {
    const userInput = await user.getCarNameInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    const carNameArr = this.getCarNameArrayFromUserInput(userInput);
    this.racingCars = carNameArr.map((carName) => new RacingCar(carName));
    console.log(this.racingCars);
  }

  getCarNameArrayFromUserInput(input) {
    const carNameArr = input.replace(/ /g, '').split(',');
    if (carNameArr.some((carName) => carName.length > 5 || carName === ''))
      throw new Error('[ERROR] 잘못된 입력입니다.');
    return carNameArr;
  }
}
