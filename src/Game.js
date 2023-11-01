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
    const input = new Input();
    const { carNames } = await input.startInput();
    this.carList = carNames.split(',');
    this.setValue();
    this.checkResult();
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
}

export default Game;
