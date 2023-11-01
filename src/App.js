import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from './InputView.js';
import Car from './Car.js';

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
    return carNames;
  }

  async requestTryCount() {
    const tryCount = await InputView.requestTryCount();
    this.tryCount = tryCount;
    MissionUtils.Console.print('');
    return tryCount;
  }
}

export default App;
