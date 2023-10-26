import { Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.joinCars = [];
  }

  async play() {
    await this.getJoinCarsArray();
  }

  async getJoinCarsArray() {
    const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    this.joinCars = cars.split(',');
  }
}

export default App;
