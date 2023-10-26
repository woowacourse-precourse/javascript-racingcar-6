import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.joinCars = [];
    this.repeatNumber = '';
  }

  async play() {
    await this.getJoinCarsArray();
    await this.getRepeatNumber();
  }

  async getJoinCarsArray() {
    const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    this.joinCars = cars.split(',');
    return;
  }

  async getRepeatNumber() {
    this.repeatNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return;
  }
}

export default App;
