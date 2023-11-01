import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input';

class App {
  constructor() {
    this.trial = 0;
    this.carList = [];
    this.totalResult = [];
  }

  async play() {
    await this.init();
    for (let trial = 0; trial < this.trial; trial += 1) {
      this.setValue();
      this.printResult();
    }
    this.printWinner();
  }

  async init() {
    const input = new Input();
    const { carNames } = await input.startInput();
    this.carList = carNames.split(',');
    this.trial = await input.setTrial();
    Console.print('\n실행 결과');
    this.carList.forEach(() => {
      this.totalResult.push(0);
    });
  }

  setValue() {
    const randomValue = [];
    this.carList.forEach(() => {
      randomValue.push(Random.pickNumberInRange(0, 9));
    });
    this.checkResult(randomValue);
  }

  checkResult(randomValue) {
    const totalResult = [];
    randomValue.forEach((item, index) => {
      if (item > 3) {
        totalResult.push(this.totalResult[index] + 1);
      }
      if (item < 4) {
        totalResult.push(this.totalResult[index]);
      }
    });
    this.totalResult = [...totalResult];
  }

  printResult() {
    this.carList.forEach((car, index) => {
      Console.print(`${car} : ${'-'.repeat(this.totalResult[index])}`);
    });
    Console.print('\n');
  }

  printWinner() {
    const winner = [];
    const maxNumber = Math.max(...this.totalResult);
    this.totalResult.forEach((number, index) => {
      if (maxNumber === number) {
        winner.push(this.carList[index]);
      }
    });
    Console.print(`최종 우승자 : ${winner.join(', ')}`);
  }
}

export default App;
