import { Console, Random } from '@woowacourse/mission-utils';
import { doValidateCarName, doValidateMoveCount } from './Validate.js';
import { GAME_MESSAGE } from './constants/Message.js';
import CONSTANT from './constants/Constant.js';

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
    const cars = await Console.readLineAsync(GAME_MESSAGE.INPUT_CARS_NAME);
    return cars.split(',');
  }

  async getMoveCount() {
    const count = await Console.readLineAsync(GAME_MESSAGE.INPUT_MOVE_COUNT);
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
    const number = Random.pickNumberInRange(CONSTANT.MIN_RANDOM_NUMBER, CONSTANT.MAX_RANDOM_NUMBER);
    return number >= CONSTANT.MOVE_FORWARD;
  }

  race() {
    Console.print(GAME_MESSAGE.RACE_RESULT);
    for (let i = 0; i < this.moveCount; i += 1) {
      this.getResult();
    }
  }

  getResult() {
    this.cars.forEach((car) => {
      if (this.isCarMove()) this.result[car] += CONSTANT.DASH;
    });
    this.printResult();
  }

  printResult() {
    const result = [];
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
    Console.print(GAME_MESSAGE.WINNER + winner);
  }
}
export default Racing;
