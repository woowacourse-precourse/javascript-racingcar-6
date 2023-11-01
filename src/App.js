import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Validation from './Validation.js';
import Car from './Car.js';

class App {
  carNames;

  cars = [];

  GameCount;

  makeCars(carNamesString) {
    const carNamesArr = carNamesString.split(',');
    carNamesArr.forEach((carName) => {
      const car = new Car(carName);
      this.cars.push(car);
      return this.cars;
    });
  }

  async play() {
    const inputCarNames = await Input.getCarNamesFromUser();
    Validation.validateCarName(inputCarNames);
    this.carNames = inputCarNames;

    const inputGameCount = await Input.getGameCountFromUser();
    Validation.validateGameCountNaturalNumber(inputGameCount);
    this.GameCount = inputGameCount;

    this.makeCars(this.carNames);
  }
}

export default App;
