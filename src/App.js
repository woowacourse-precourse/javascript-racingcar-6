import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants/message';

class App {
  constructor() {
    this.carList = [];
  }

  async getCarName() {
    const inputCarName = await Console.readLineAsync(MESSAGE.getCarName);
    const carList = inputCarName.split(',');

    // TODO : 자동차 이름 유효검사

    this.carList = carList;
  }

  async play() {}
}

export default App;
