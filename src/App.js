import { Console } from '@woowacourse/mission-utils';
import validCarNames from './validation/validCarNames.js';
import validTryCount from './validation/validTryCount.js';
import RunRace from './runRace/RunRace.js';

class App {
  async play() {
    const cars = await this.returnCarNames();
    const tryCount = await this.getTryCount();
    Console.print('\n실행 결과');
    new RunRace().runRace(cars, tryCount);
  }

  async returnCarNames() {
    const carNames = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    return validCarNames(carNames);
  }

  async getTryCount() {
    const tryCount = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

    return validTryCount(tryCount);
  }
}

export default App;
