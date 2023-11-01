import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from './InputView.js';
import Car from './Car.js';
import Validation from './Validator.js';

class App {
  tryCount = 0;
  carList = [];
  carPositions = [];

  async play() {
    await this.requestCarNames();
    await this.requestTryCount();
    this.moveCar();
    this.getCarPositions(this.carList);
  }

  makeCarList = (carName) => {
    this.carList.push(new Car(carName));
  }

  // todo 함수 분리 필요
  moveCar() {
    MissionUtils.Console.print('실행 결과');
    for (let tryIndex = 0; tryIndex < this.tryCount; tryIndex++) {
      this.carList.forEach((car) => {
        car.move();
        MissionUtils.Console.print(`${car.name} : ${'-'.repeat(car.position)}`);
      });
      MissionUtils.Console.print('');
    }
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
    MissionUtils.Console.print('');
    return tryCount;
  }
}

export default App;
