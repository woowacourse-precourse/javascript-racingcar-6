import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Car from './Car.js';

// 배열로서 carName, carValue 관리

class Game {
  constructor() {
    this.carList = [];
    this.randomValue = [];
    this.goBack = [];
  }

  async play() {
    const input = new Input();
    const { carNames } = await input.startInput();
    this.carList = carNames.split(',');
    this.getValue();
  }

  getValue() {
    this.carList.forEach((item) => {
      const car = new Car(item);
      this.randomValue.push(car.getRandomNumber());
    });
  }
}

export default Game;
