import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Car from './Car.js';

// 배열로서 carName, carValue 관리

class Game {
  constructor() {
    this.carList = [];
    this.randomValue = [];
    this.totalResult = [];
  }

  async play() {
    await this.init();
    this.setValue();
    this.checkResult();
    this.printResult();
  }

  async init() {
    const input = new Input();
    const { carNames } = await input.startInput();
    this.carList = carNames.split(',');
    this.trial = await input.setTrial();
    Console.print('\n실행 결과');
  }

  setValue() {
    this.carList.forEach((item) => {
      const car = new Car(item);
      this.randomValue.push(car.getRandomNumber());
      this.totalResult.push(0);
    });
  }

  checkResult() {
    const totalResult = [];
    this.randomValue.forEach((item, index) => {
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
  }
}

export default Game;

// 굳이 랜덤만 받아올거면 Car 객체는 필요없을듯
