import InputManager from './InputManager.js';
import Car from './Car.js';
import { Console } from '@woowacourse/mission-utils';
class RacingGame {
  constructor() {
    this.cars = [];
    this.tryNum = 0;
  }
  async playRacing() {
    const inputManager = new InputManager();
    const carNameList = await this.getCarNameList(inputManager);

    this.genearteCarObjects(carNameList);
    this.tryNum = await this.getTryNum(inputManager);

    for (let i = 0; i < this.tryNum; i++) await this.executeCycle();
  }

  getCarNameList(inputManager) {
    return inputManager.enterCarNameList();
  }

  getTryNum(inputManager) {
    return inputManager.enterTryNum(inputManager);
  }

  genearteCarObjects(carNameList) {
    carNameList.forEach((carName) => {
      const car = new Car(carName);
      this.cars.push(car);
    });
  }

  async executeCycle() {
    for (let j = 0; j < this.cars.length; j++) {
      await this.cars[j].move();
    }
  }
}

export default RacingGame;
