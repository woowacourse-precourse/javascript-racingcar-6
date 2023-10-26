import { checkErrorInputName, checkErrorPlayNumber } from './validation.js';

import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGE } from './message.js';

class App {
  constructor() {
    this.carName = new Map();
    this.playNumber = 0;
  }
  async play() {
    await this.getCarName();
    await this.getPlayNumber();
  }
  async getCarName() {
    const inputNameArr = (await Console.readLineAsync(INFO_MESSAGE.GET_CAR_NAME)).split(',').map((name) => name.trim());
    checkErrorInputName(inputNameArr);
    inputNameArr.forEach((name) => this.carName.set(name, ''));
  }
  async getPlayNumber() {
    const inputNumber = Number(await Console.readLineAsync(INFO_MESSAGE.GET_PLAY_NUMBER));
    checkErrorPlayNumber(inputNumber);
    this.playNumber = inputNumber;
  }
}

export default App;
