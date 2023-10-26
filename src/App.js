import { Console } from '@woowacourse/mission-utils';
import Validate from './Validate.js';

class App {
  constructor() {
    this.joinCars = [];
    this.repeatNumber = '';
  }

  async play() {
    this.joinCars = await this.getJoinCarsArray();
    this.repeatNumber = await this.getRepeatNumber();

    if (!Validate.isPositiveInteger(this.repeatNumber)) {
      throw new Error('[ERROR]');
    }
  }

  async getJoinCarsArray() {
    const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');

    return cars.split(',');
  }

  async getRepeatNumber() {
    return await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default App;
