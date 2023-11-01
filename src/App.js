import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';
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
    OutputView.printResultHeader();
    this.getCarPositions(this.carList);
    OutputView.printCarPosition(this.carList, this.tryCount);
    const winners = this.getWinners(this.carList);
    OutputView.printWinners(winners);
  }

  makeCarList = (carName) => {
    this.carList.push(new Car(carName));
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
