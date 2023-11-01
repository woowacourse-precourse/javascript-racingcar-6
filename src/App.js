import { Random, Console } from '@woowacourse/mission-utils';
import Validate from './validation.js';
import { GAME_MESSAGE } from './constant.js';

class App {
  constructor() {
    this.carsStatus = {};
    this.tryNumber = 0;
  }

  async inputCarsStatus() {
    const cars = await Console.readLineAsync(GAME_MESSAGE.INPUT_CAR);
    this.carsStatus = cars.split(',').map((name) => ({ name, move: 0 }));
  }

  async inputTryNumber() {
    this.tryNumber = await Console.readLineAsync(GAME_MESSAGE.INPUT_TRY_NUMBER);
  }

  async play() {
    await this.inputCarsStatus();
    await this.inputTryNumber();
    console.log(this.carsStatus, this.tryNumber);
  }
}

export default App;
