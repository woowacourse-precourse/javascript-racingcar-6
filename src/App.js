import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from './constants/message';

class App {
  constructor() {
    this.carList = [];
    this.playNum = 0;
  }

  async getCarName() {
    const inputCarName = await Console.readLineAsync(MESSAGE.getCarName);
    const carList = inputCarName.split(',');

    // TODO : 자동차 이름 유효검사

    this.carList = carList;
  }

  async getPlayNum() {
    const inputPlayNum = await Console.readLineAsync(MESSAGE.getPlayNum);
    const playNum = parseInt(inputPlayNum, 10);

    // TODO : 시도할 횟수 유효검사

    this.playNum = playNum;
  }

  async play() {
    this.start();
  }
}

export default App;
