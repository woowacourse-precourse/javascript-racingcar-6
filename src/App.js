import { Random, Console } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.attempts = 0;
    this.carName = [];
    this.carPosition = [];
  }
  async play() {
    this.carName = await this.getCarName();
    this.attempts = await this.getAttempts();

    Console.print(`\n실행 결과`);
    this.startRace();
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

  startRace() {
    this.carPosition = Array(this.carName.length).fill('');

    for (let i = 0; i < this.attempts; i++) {
      this.moveCar();
    }
  }

  moveCar() {
    for (let i = 0; i < this.carName.length; i++) {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        this.carPosition[i] += '-';
      }
      Console.print(`${this.carName[i]} : ${this.carPosition[i]}`);
    }
    Console.print('');
  }
}

export default App;
