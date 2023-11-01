import { Random, Console } from '@woowacourse/mission-utils';
import Validate from './validation.js';
import { GAME_MESSAGE } from './constant.js';

class App {
  constructor() {
    this.carsStatus = {};
    this.tryNumber = 0;
  }

  async inputCarsStatus() {
    const carsStatus = await Console.readLineAsync(GAME_MESSAGE.INPUT_CAR);
    this.carsStatus = Validate.carsValidate(carsStatus)
      .split(',')
      .map((name) => ({ name, move: 0 }));
  }

  async inputTryNumber() {
    const truNumber = await Console.readLineAsync(GAME_MESSAGE.INPUT_TRY_NUMBER);
    this.tryNumber = Validate.tryNumberValidate(truNumber);
  }

  async play() {
    await this.inputCarsStatus();
    await this.inputTryNumber();
  }
}

export default App;
