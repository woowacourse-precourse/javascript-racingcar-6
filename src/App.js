import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Car from './Car.js';
import Validation from './utils/Validator.js';
import message from "./Constants.js";

class App {
  tryCount = 0;
  carList = [];
  carPositions = [];

  async play() {
    await this.requestCarNames();
    await this.requestTryCount();
    this.moveCar();
    this.printResultHeader();
    this.getCarPositions(this.carList);
    this.printCarPosition();
    const winners = this.getWinners(this.carList);
    this.printWinners(winners);
  }

  makeCarList = (carName) => {
    this.carList.push(new Car(carName));
  }

  // todo print 함수 정리
  moveCar() {
    this.carList.forEach((car) => {
      car.move();
    });
  }

  printResultHeader() {
    MissionUtils.Console.print(message.RESULT_HEADER);
  }

  printEmptyLine() {
    MissionUtils.Console.print(message.EMPTY_LINE);
  }

  printCarPosition() {
    for (let tryIndex = 0; tryIndex < this.tryCount; tryIndex++) {
      this.carList.forEach((car) => {
        car.move();
        MissionUtils.Console.print(`${car.name} : ${message.POSITION_UNIT.repeat(car.position)}`);
      });
      this.printEmptyLine();
    }
  }

  getWinners(carList) {
    const maxPosition = this.getMaxPosition(carList);
    const winners = this.findWinningCars(carList, maxPosition);
    return this.extractWinnerNames(winners);
  }

  getMaxPosition(carList) {
    return Math.max(...carList.map((car) => car.position));
  }

  findWinningCars(carList, maxPosition) {
    return carList.filter((car) => car.position === maxPosition);
  }

  extractWinnerNames(winners) {
    return winners.map((car) => car.name);
  }

  getCarPositions(carList) {
    return carList.map((car) => this.carPositions.push(car.position));
  }

  printWinners(winners) {
    MissionUtils.Console.print(`${message.WINNER_HEADER}${winners.join(message.WINNER_DELIMITER)}`);
  }

  async requestCarNames() {
    const carNames = await InputView.requestCarNames();
    carNames.forEach((carName) => this.makeCarList(carName));
    Validation.validateCarNames(carNames);
    return carNames;
  }

  async requestTryCount() {
    const tryCount = await InputView.requestTryCount();
    this.tryCount = tryCount;
    Validation.validateTryCount(tryCount);
    MissionUtils.Console.print(message.EMPTY_LINE);
    return tryCount;
  }
}

export default App;
