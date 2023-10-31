import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.carName = [];
  }
  async play() {
    this.carName = await this.getCarName();
  }

  async getCarName() {
    const input = await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`);
    return input.split(',');
  }
}

export default App;
