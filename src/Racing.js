import { Console, Random } from '@woowacourse/mission-utils';
import { doValidateCarName, doValidateMoveCount } from './Validate.js';
class Racing {
  async start() {
    this.result = {};
    this.cars = await this.getCarsName();
    this.validateCarName();
    this.cars.forEach((car) => {
      this.result[car] = '';
    });
    this.moveCount = await this.getMoveCount();
    this.validateMoveCount();
    this.race();
    this.getWinner();
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
      doValidateCarName(name);
    });
  }

  validateMoveCount() {
    doValidateMoveCount(this.moveCount);
  }

  isCarMove() {
    const number = Random.pickNumberInRange(0, 9);
    return number >= 4;
  }

  race() {
    for (let i = 0; i < this.moveCount; i++) {
      this.getResult();
    }
  }

  getResult() {
    this.cars.forEach((car) => {
      if (this.isCarMove()) this.result[car] += '-';
    });
    this.printResult();
  }

  printResult() {
    let result = [];
    this.cars.forEach((car) => {
      result.push(`${car} : ${this.result[car]}`);
    });
    Console.print(`${result.join('\n')}\n`);
  }

  getWinner() {
    let max = -1;
    let winner = '';
    this.cars.forEach((car) => {
      if (max < this.result[car].length) {
        winner = car;
        max = this.result[car].length;
      } else if (max === this.result[car].length) winner += `, ${car}`;
    });
    Console.print(`최종 우승자 : ${winner}`);
  }
}
export default Racing;
