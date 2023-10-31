import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.carName = [];
    this.attempts = 0;
  }
  async play() {
    this.carName = await this.getCarName();
    this.attempts = await this.getAttempts();
  }

  async getCarName() {
    const input = await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`);
    return input.split(',');
  }

  async getAttempts() {
    const input = await Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`);
    return +input;
  }

}

export default App;
