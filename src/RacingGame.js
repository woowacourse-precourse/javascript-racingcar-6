import InputManager from './InputManager.js';
import Car from './Car.js';

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
  }

  async getCarNameList(inputManager) {
    return inputManager.enterCarNameList();
  }

  async getTryNum(inputManager) {
    return inputManager.enterTryNum(inputManager);
  }

  async genearteCarObjects(carNameList) {
    carNameList.forEach((carName) => {
      const car = new Car(carName);
      this.cars.push(car);
    });
  }
}

export default RacingGame;
