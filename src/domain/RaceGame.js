import Car from './Car.js';
import {
  printProgressProcess,
  printWinnerList,
  printProgressResult,
  printEmptyLine,
} from '../util/Utils.js';

export default class RaceGame {
  constructor(carNameList, tryNum) {
    this.cars = carNameList.split(',').map((name) => new Car(name));
    this.tryNum = tryNum;
  }

  #gameTry() {
    let tries = this.tryNum;
    while (tries) {
      tries -= 1;
      this.cars.forEach((car) => {
        car.move();
        printProgressProcess(car.name, car.progress);
      });
      printEmptyLine();
    }
  }

  #checkWinner() {
    const winnerList = this.cars
      .sort((a, b) => b.progress - a.progress)
      .filter((car) => car.progress === this.cars[0].progress)
      .map((car) => car.name)
      .join(',');
    printWinnerList(winnerList);
  }

  async gameStart() {
    printProgressResult();
    this.#gameTry();
    this.#checkWinner();
  }
}
