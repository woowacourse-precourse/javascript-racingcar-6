import { checkErrorInputName, checkErrorPlayNumber } from './validation.js';

import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGE } from './message.js';
import checkRandomNumber from './randomNumber.js';

class App {
  constructor() {
    this.carName = new Map();
    this.playNumber = 0;
  }
  async play() {
    await this.getCarName();
    await this.getPlayNumber();
    Console.print(INFO_MESSAGE.RESULT);
    while (this.playNumber--) {
      for (const [name, moveLog] of this.carName) {
        let flag = await checkRandomNumber();
        if (flag) {
          this.carName.set(name, moveLog + '-');
        }
        Console.print(`${name} : ${this.carName.get(name)}`);
      }
      Console.print(' ');
    }
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
