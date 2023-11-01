import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';

// 배열로서 carName, carValue 관리

class Game {
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
}

export default Game;

// 굳이 랜덤만 받아올거면 Car 객체는 필요없을듯
