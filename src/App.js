import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from './InputView.js';
import Car from './Car.js';
import Validation from './Validator.js';

class App {
  tryCount = 0;
  carList = [];

  async play() {
    await this.requestCarNames();
    await this.requestTryCount();
  }

  makeCarList = (carName) => {
    this.carList.push(new Car(carName));
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
