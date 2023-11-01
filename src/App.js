import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.carsStatus = {};
    this.tryNumber = 0;
  }

  async inputCarsStatus() {
    this.carsStatus = await Console.readLineAsync();
  }

  async inputTryNumber() {
    this.tryNumber = await Console.readLineAsync();
  }

  async play() {
    await this.inputCarsStatus();
    await this.inputTryNumber();
  }
}

export default App;
