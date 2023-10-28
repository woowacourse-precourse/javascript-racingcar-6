import User from './User.js';
import RacingCar from './RacingCar.js';

export default class Computer {
  constructor() {
    this.racingCars = [];
  }

  playGame(user) {}

  async getCarsNameArrayFromUser(user) {
    const cars = await user.getUserInputCarsNameArray(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );
    this.racingCars = cars.map((car) => new RacingCar(car));
  }
}
