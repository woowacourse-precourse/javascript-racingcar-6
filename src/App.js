import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  constructor() {
    this.carNameArr = [];
    this.numberOfAttempts = 0;
  }

  async getCarName() {
    const carName = await MissionUtils.Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    this.carNameArr = carName.split(',');

    const nameSet = new Set();

    this.carNameArr.forEach(name => {
      if (name.length >= 5) {
        throw new Error('[ERROR] 숫자가 잘못된 형식입니다.');
      }
      if (nameSet.has(name)) {
        throw new Error('[ERROR] 중복된 이름이 있습니다.');
      }
      nameSet.add(name);
    });

    return this.carNameArr;
  }

  async getNumberOfAttempts() {
    const numberOfAttempts = await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.numberOfAttempts = numberOfAttempts;

    return numberOfAttempts;
  }

  async play() {
    await this.getCarName();
    await this.getNumberOfAttempts();
  }
}

export default App;
