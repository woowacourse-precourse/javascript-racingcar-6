import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import Output from './Output.js';
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
    });
    return this.cars;
  }

  setCarsMovements() {
    this.cars.forEach((car) => {
      car.setMovement(this.GameCount);
    });
  }

  findLongestMovementLength() {
    const movementLengthsArr = [];
    this.cars.forEach((car) => {
      const movementLength = car.getMovementLength();
      movementLengthsArr.push(movementLength);
    });

    return Math.max(...movementLengthsArr);
  }

  async play() {
    const inputCarNames = await Input.getCarNamesFromUser();
    Validation.validateCarName(inputCarNames);
    this.carNames = inputCarNames;

    const inputGameCount = await Input.getGameCountFromUser();
    Validation.validateGameCountNaturalNumber(inputGameCount);
    this.GameCount = inputGameCount;

    this.makeCars(this.carNames);

    this.setCarsMovements();

    Output.printGameResult(this.cars, this.GameCount);

    const longestMovementLength = this.findLongestMovementLength();
  }
}

const app = new App();
app.play();

export default App;
