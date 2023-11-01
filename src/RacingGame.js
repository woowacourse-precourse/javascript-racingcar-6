import InputManager from './InputManager.js';
import Car from './Car.js';
import { Console } from '@woowacourse/mission-utils';
import { RACING_RESULT, WINNER_RESULT } from './Constants.js';
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
    Console.print(RACING_RESULT);

    for (let i = 0; i < this.tryNum; i++) {
      await this.executeCycle();
      this.printResult();
    }
    this.printWinner();
  }

  genearteCarObjects(carNameList) {
    carNameList.forEach((carName) => {
      const car = new Car(carName);
      this.cars.push(car);
    });
  }

  getCarNameList(inputManager) {
    return inputManager.enterCarNameList();
  }

  getTryNum(inputManager) {
    return inputManager.enterTryNum(inputManager);
  }

  getWinners() {
    const maxMoveCount = Math.max(...this.cars.map((car) => car.moveCount));
    const winners = this.cars
      .filter((car) => car.moveCount === maxMoveCount)
      .map((car) => car.name);
    return winners;
  }

  async executeCycle() {
    for (let i = 0; i < this.cars.length; i++) {
      await this.cars[i].move();
    }
  }

  printResult() {
    let result = '';
    for (let i = 0; i < this.cars.length; i++) {
      const carName = this.cars[i].name;
      const moveResult = '-'.repeat(this.cars[i].moveCount);
      const resultByCar = `${carName} : ${moveResult}\n`;
      result += resultByCar;
    }
    Console.print(result);
  }

  printWinner() {
    const winners = this.getWinners();
    Console.print(`${WINNER_RESULT} ${winners.join(', ')}`);
  }
}

export default RacingGame;
