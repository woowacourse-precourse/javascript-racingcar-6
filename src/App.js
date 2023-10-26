import { Random, Console } from '@woowacourse/mission-utils';
import { isValidCarNames, isValidMoveChanceCount } from './utils.js';

class App {
  constructor() {
    this.carNamesAndDistanceMap = new Map();
  }

  async setCarNames() {
    const carNamesString = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
    );

    if (isValidCarNames(carNamesString)) {
      const carNamesArray = carNamesString.split(',');

      for (const carName of carNamesArray) {
        this.carNamesAndDistanceMap.set(carName, 0);
      }
    }
  }

  async setMoveChanceCount() {
    const moveChanceCountString = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n'
    );

    if (isValidMoveChanceCount(moveChanceCountString)) {
      this.moveChanceCount = Number(moveChanceCountString);
    }
  }

  async play() {
    await this.setCarNames();
    await this.setMoveChanceCount();
  }
}

export default App;
