import Input from './Input';
import Car from './Car';

// 배열로서 carName, carValue 관리

class Game {
  constructor() {
    this.carList = [];
    this.randomValue = [];
    this.recordMove = [];
  }

  async play() {
    const input = new Input();
    const { carNames } = await input.startInput();
    this.carList = carNames.split(',');
    this.getValue();
    this.checkMove();
  }

  getValue() {
    this.carList.forEach((item) => {
      const car = new Car(item);
      this.randomValue.push(car.getRandomNumber());
    });
  }

  checkMove() {
    this.randomValue.forEach((item) => {
      if (item > 3) {
        this.recordMove.push(1);
      }
      if (item < 4) {
        this.recordMove.push(0);
      }
    });
  }
}

export default Game;
