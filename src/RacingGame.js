import { Console } from '@woowacourse/mission-utils';
import InputManager from './InputManager.js';
import Car from './Car.js';

class RacingGame {
  constructor() {
    this.cars = [];
  }
  async playRacing() {
    const inputManager = new InputManager();
    const carNameList = await this.getCarNameList(inputManager);
    this.genearteCarObjects(carNameList);
    inputManager.enterTryNum();
  }

  async getCarNameList(inputManager) {
    return inputManager.enterCarNameList();
  }

  async genearteCarObjects(carNameList) {
    carNameList.forEach((carName) => {
      const car = new Car(carName);
      this.cars.push(car);
    });
  }
}

export default RacingGame;
