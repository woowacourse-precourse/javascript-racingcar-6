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
    const input = (
      await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`)
    ).split(',');

    if (!this.validateCarName(input)) {
      throw new Error('[ERROR] 이름이 잘못된 형식입니다.');
    }

    return input;
  }

  async getAttempts() {
    const input = +(await Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`));

    if (!this.validateAttempts(input)) {
      throw new Error('[ERROR] 횟수는 0보다 큰 숫자만 입력해주세요.');
    }
    return input;
  }

  validateCarName(arr) {
    return arr.every((name) => 0 < name.length && name.length <= 5);
  }

  validateAttempts(num) {
    return !isNaN(num) && 0 < num;
  }
}

export default App;
