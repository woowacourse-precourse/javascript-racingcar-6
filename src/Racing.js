import { Console } from '@woowacourse/mission-utils';
import doValidate from './Validate.js';
class Racing {
  async start() {
    this.cars = await this.getCarsName();
    this.validateCarName();
    this.moveCount = await this.getMoveCount();
  }

  async getCarsName() {
    const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    return cars.split(',');
  }

  async getMoveCount() {
    const count = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    return count;
  }

  validateCarName() {
    this.cars.forEach((name) => {
      doValidate(name);
    });
  }
}
export default Racing;
