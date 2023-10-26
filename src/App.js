import { Random, Console } from '@woowacourse/mission-utils';
import { isValidCarNames } from './utils.js';

class App {
  constructor() {
    this.carNamesAndDistanceMap = new Map();
  }

  async setCarNames() {
    const carNamesString = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );

    if (isValidCarNames(carNamesString)) {
      const carNamesArray = carNamesString.split(',');

      for (const carName of carNamesArray) {
        this.carNamesAndDistanceMap.set(carName, 0);
      }
    }
  }

  async play() {
    this.setCarNames();
  }
}

export default App;
