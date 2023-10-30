import { Console } from '@woowacourse/mission-utils';
import doValidate from './Validate.js';
class Racing {
  async start() {
    this.cars = await this.getCarsName();
    this.validateCarName();
  }

  async getCarsName() {
    const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
    return cars.split(',');
  }

  validateCarName() {
    this.cars.forEach((name) => {
      doValidate(name);
    });
  }
}

export default Racing;
