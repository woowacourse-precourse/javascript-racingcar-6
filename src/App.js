import { Console } from '@woowacourse/mission-utils';
import { INFO_MESSAGE } from './message.js';
import checkErrorInputName from './validation.js';

class App {
  constructor() {
    this.carName = new Map();
  }
  async play() {
    await this.getCarName();
  }
  async getCarName() {
    const nameArr = await Console.readLineAsync(INFO_MESSAGE.GET_CAR_NAME)
      .split(',')
      .map((name) => name.trim());
    checkErrorInputName(nameArr);
    nameArr.forEach((name) => this.carName.set(name, ''));
  }
}

export default App;
