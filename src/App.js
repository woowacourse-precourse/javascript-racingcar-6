import { Console } from '@woowacourse/mission-utils';
import validCarNames from './validation/validCarNames.js';
import validTryCount from './validation/validTryCount.js';

class App {
  async play() {
    const cars = await this.returnCarNames();
    const tryCount = await this.getTryCount();
    Console.print(cars, tryCount);
  }

  async returnCarNames() {
    const carNames = await Console.readLineAsync('자동차 이름을 입력하세요. (이름은 쉼표(,)로 구분)\n');

    return validCarNames(carNames);
  }

  async getTryCount() {
    const tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    return validTryCount(tryCount);
  }
}

export default App;
