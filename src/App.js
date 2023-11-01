import { Random, Console } from '@woowacourse/mission-utils';
import Validate from './validation.js';
import { GAME_MESSAGE } from './constant.js';

class App {
  constructor() {
    this.carsStatus = {};
    this.tryNumber = 0;
  }

  moveCars() {
    this.carsStatus = this.carsStatus.map((carStatus) => ({
      ...carStatus,
      move: Random.pickNumberInRange(0, 9) >= 4 ? carStatus.move + 1 : carStatus.move,
    }));
  }

  printCars() {
    this.carsStatus.forEach((carStatus) => {
      Console.print(`${carStatus.name} : ${'-'.repeat(carStatus.move)}`.trim());
    });
    Console.print('');
  }

  calculateMaxMove() {
    return Math.max(...this.carsStatus.map((carStatus) => carStatus.move));
  }

  calculateWinner() {
    return this.carsStatus
      .filter((carStatus) => carStatus.move === this.calculateMaxMove())
      .map((carStatus) => carStatus.name);
  }

  async inputCarsStatus() {
    const carsStatus = await Console.readLineAsync(GAME_MESSAGE.INPUT_CAR);
    this.carsStatus = Validate.carsValidate(carsStatus)
      .split(',')
      .map((name) => ({ name: name.trim(), move: 0 }));
  }

  async inputTryNumber() {
    const truNumber = await Console.readLineAsync(GAME_MESSAGE.INPUT_TRY_NUMBER);
    this.tryNumber = Validate.tryNumberValidate(truNumber);
  }

  async play() {
    await this.inputCarsStatus();
    await this.inputTryNumber();
    Console.print('\n실행 결과');
    for (let i = 0; i < this.tryNumber; i += 1) {
      this.moveCars();
      this.printCars();
    }
    Console.print(`최종 우승자 : ${this.calculateWinner().join(', ')}`.trim());
  }
}

export default App;
